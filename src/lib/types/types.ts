import {MLString} from "@/lib/types";

export interface ExperienceProject {
    description: MLString;
    skills?: string[];
}

export interface Experience {
    company: MLString;
    companyLogo?: string;
    companyUrl?: string;
    role: MLString;
    location: MLString;
    startDate: MLString;
    endDate: MLString;
    projects?: ExperienceProject[];
}

export interface Project {
    name: MLString;
    logo?: string;
    url?: string;
    description?: MLString;
    skills?: string[];
    codeUrl?: string;
}

export interface Certification {
    name: MLString;
    issuer: MLString;
    logo?: string;
    url?: string;
    period: MLString;
    description: MLString;
    skills: string[];
    credentialUrl?: string;
}

export interface Skill {
    group: MLString;
    items: Array<MLString | string>;
    highlight?: string[];
    accent?: string;
}
