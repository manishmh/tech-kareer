'use client'

import JobMenu from "@/components/jobs/job-menu";
import { ReactNode, useState } from "react";

export interface InitialStateTypes {
    preview: boolean;
    applicants: boolean;
    match: boolean;
    messages: boolean;
}

const InitialState: InitialStateTypes = {
    preview: true,
    applicants: false,
    match: false,
    messages: false,
}

const JobsLayout = ({ children }: { children: ReactNode }) => {
    const [jobsMenuItem, setJobsMenuItem] = useState<InitialStateTypes>(InitialState)
    const handleJobsMenuItem = (menu: keyof InitialStateTypes) => {
        const newMenuItem = {
            preview: false,
            applicants: false,
            match: false,
            messages: false,
        }
        newMenuItem[menu] = true;

        setJobsMenuItem(newMenuItem)
    }

    return (
        <div className="font-sans">
            <JobMenu jobsMenuItem={jobsMenuItem} handleJobsMenuItem={handleJobsMenuItem} />
            { children }
        </div>
    )
}

export default JobsLayout;