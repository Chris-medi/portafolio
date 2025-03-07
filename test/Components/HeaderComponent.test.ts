import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HeaderComponent from "../../src/views/components/HeaderComponent.vue";

describe("HeaderComponent", () => {
  it("Renders properly", () => {
    const wrapper = mount(HeaderComponent);
    expect(wrapper.text()).toContain("Cristian Medina");
  });

  it("Starts typing animation", async () => {
    const wrapper = mount(HeaderComponent);
    // Wait for component to mount and start animation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(wrapper.text()).toContain("Developer");
  });

  it("Start writing deletion animation", async () => {
    const wrapper = mount(HeaderComponent);
    // Wait for component to mount and start animation
    await new Promise((resolve) => setTimeout(resolve, 5000));
    expect(wrapper.text()).not.toContain("Developer");
  });
});
