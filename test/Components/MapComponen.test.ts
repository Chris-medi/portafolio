import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import * as L from "leaflet";

import MapComponent from "../../src/views/components/MapComponent.vue";

vi.mock("leaflet", () => {
  return {
    map: vi.fn(() => ({
      setView: vi.fn().mockReturnThis(),
    })),
    tileLayer: vi.fn(() => ({
      addTo: vi.fn(),
    })),
    marker: vi.fn(() => ({
      addTo: vi.fn().mockReturnThis(),
      bindPopup: vi.fn().mockReturnThis(),
      openPopup: vi.fn(),
    })),
  };
});

describe("MapComponent", () => {
  it("renders the map container", () => {
    const wrapper = mount(MapComponent);
    expect(wrapper.find("#map").exists()).toBe(true);
  });

  it("initializes Leaflet map with correct coordinates", () => {
    mount(MapComponent);
    expect(L.map).toHaveBeenCalledWith("map");
    expect(L.tileLayer).toHaveBeenCalled();
    expect(L.marker).toHaveBeenCalledWith([
      5.383309999939931, -75.16111190527492,
    ]);
  });
});
