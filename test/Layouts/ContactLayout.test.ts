import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ContactLayout from "../../src/views/layout/ContactLayout.vue";
import { sendForm } from "../../src/services/ContacServices";

// Mock the external components
vi.mock("@components/MapComponent.vue", () => ({
  default: { template: "<div>Map Mock</div>" },
}));

vi.mock("@components/InputComponent.vue", () => ({
  default: { template: "<input />" },
}));

vi.mock("@components/ModalComponent.vue", () => ({
  default: {
    template: "<div>Modal Mock</div>",
  },
}));

// Mock the service
vi.mock("@services/ContacServices", () => ({
  sendForm: vi.fn(),
}));

describe("ContactLayout", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("Should submit form successfully", async () => {
    // Mock successful response
    const mockResponse = { status: 200, data: "success" };
    vi.mocked(sendForm).mockResolvedValue(mockResponse);

    const wrapper = mount(ContactLayout);

    // Create form data
    const formData = new FormData();
    formData.append("first-name", "John");
    formData.append("subject", "Test Subject");
    formData.append("email", "test@test.com");
    formData.append("messages", "Test message");

    // Trigger form submission
    await wrapper.find("#subject").setValue("Test Subject");
    await wrapper.find("#first-name").setValue("John");
    await wrapper.find("input[type=email]").setValue("test@test.com");
    await wrapper.find("textarea").setValue("Test message");

    wrapper.find("form").trigger("submit");
    // Verify sendForm was called
    expect(sendForm).toHaveBeenCalledTimes(1);
    expect(sendForm).toHaveBeenCalledWith(expect.any(FormData));
  });

  it("Should handle form submission validated", async () => {
    // Mock error response
    const mockResponse = { status: 500, data: "error" };
    vi.mocked(sendForm).mockRejectedValue(mockResponse);
    const wrapper = mount(ContactLayout);
    wrapper.find("button").trigger("click");
    expect(sendForm).not.toHaveBeenCalledOnce();
  });

  it("Should handle error submission", async () => {
    // Mock successful response

    vi.mocked(sendForm).mockResolvedValue(new Error("Server Error"));

    const wrapper = mount(ContactLayout);

    // Create form data
    const formData = new FormData();
    formData.append("first-name", "John");
    formData.append("subject", "Test Subject");
    formData.append("email", "test@test.com");
    formData.append("messages", "Test message");

    // Trigger form submission
    await wrapper.find("#subject").setValue("Test Subject");
    await wrapper.find("#first-name").setValue("John");
    await wrapper.find("input[type=email]").setValue("test@test.com");
    await wrapper.find("textarea").setValue("Test message");

    wrapper.find("form").trigger("submit");

    expect(
      wrapper.findComponent({ name: "ModalComponent" }).isVisible()
    ).toBeTruthy();
  });
});
