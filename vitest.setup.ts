import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock IntersectionObserver which is missing in jsdom
class IntersectionObserverMock {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {}

  observe(target: Element) {
    // Fire callback immediately to simulate visibility in tests
    this.callback(
      [
        {
          isIntersecting: true,
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRatio: 1,
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
          target,
          time: Date.now(),
        } as IntersectionObserverEntry,
      ],
      this
    );
  }

  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock as any;

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock as any;

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
    };
  },
  usePathname() {
    return "/";
  },
}));
