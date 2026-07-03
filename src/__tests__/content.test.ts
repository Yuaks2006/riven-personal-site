import { describe, expect, it } from "vitest";
import {
  contact,
  navItems,
  projects,
  profile,
  waytoagiEvents,
  workExperience
} from "../data/site";

describe("site content contract", () => {
  it("uses Riven as the primary identity and keeps required contact channels", () => {
    expect(profile.displayName).toBe("Riven");
    expect(profile.legalName).toBe("谭宇峻");
    expect(contact.email).toBe("yuaks2006@gmail.com");
    expect(contact.wechat.value).toBe("Tanwu20061204");
    expect(contact.wechat.note).toBe("添加微信请备注来意。");
  });

  it("defines the required public routes and content collections", () => {
    expect(navItems.map((item) => item.href)).toEqual([
      "/",
      "/#work",
      "/#road",
      "/#skills",
      "/#experience",
      "/#contact"
    ]);
    expect(projects).toHaveLength(3);
    expect(waytoagiEvents.length).toBeGreaterThanOrEqual(7);
    expect(workExperience).toHaveLength(1);
  });

  it("keeps optional links hidden when unavailable", () => {
    expect(projects.every((project) => project.projectUrl === undefined)).toBe(true);
    expect(projects.every((project) => project.materials.length === 0)).toBe(true);
  });
});
