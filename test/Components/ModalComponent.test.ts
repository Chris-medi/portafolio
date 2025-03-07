import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ModalComponent from "../../src/views/components/ModalComponent.vue";

import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

describe("ModalComponent", () => {
  it("Should not render when show is false", () => {
    const wrapper = mount(ModalComponent, {
      props: {
        show: false,
        message: "Test message",
        type: "success",
      },
    });
    expect(wrapper.find("div").exists()).toBe(false);
  });

  it("Should render success icon when type is success", () => {
    const wrapper = mount(ModalComponent, {
      props: {
        show: true,
        message: "Success message",
        type: "success",
      },
    });
    expect(wrapper.findComponent(InformationCircleIcon).exists()).toBeTruthy();
  });

  it("Should render error icon when type is not success", () => {
    const wrapper = mount(ModalComponent, {
      props: {
        show: true,
        message: "Error message",
        type: "error",
      },
    });
    expect(
      wrapper.findComponent(ExclamationTriangleIcon).exists()
    ).toBeTruthy();
  });

  it("Should display the correct message", () => {
    const testMessage = "Test message";
    const wrapper = mount(ModalComponent, {
      props: {
        show: true,
        message: testMessage,
        type: "success",
      },
    });
    expect(wrapper.text()).toContain(testMessage);
  });

  it("Should emit close event when clicked", async () => {
    const wrapper = mount(ModalComponent, {
      props: {
        show: true,
        message: "Test message",
        type: "success",
      },
    });
    await wrapper.find("div").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
