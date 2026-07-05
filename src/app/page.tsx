import { h } from "@/lib/h";
import {
    Hero,
    ProjectsPreviewSection,
    CertificationsSection,
    SkillsSection,
    ExperienceSection,
    ContactSection,
} from "@/components/sections";

export default function HomePage() {
    return h(
          "div",
          null,
          h(Hero, null),
          h(ProjectsPreviewSection, null),
          h(SkillsSection, null),
          h(CertificationsSection, null),
          h(ExperienceSection, null),
          h(ContactSection, null),
        );
}
