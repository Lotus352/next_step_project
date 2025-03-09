import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { checkExpiryDate, formatTextEnum } from "@/lib/utils.ts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store.ts";
import { useEffect } from "react";

export default function JobDescription() {
  const { selectedJob } = useSelector((state: RootState) => state.jobs);
  useEffect(() => {}, []);

  return (
    selectedJob != null && (
      <Card>
        <CardHeader>
          <CardTitle>Job Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{selectedJob.detailedDescription}</p>

          {selectedJob.workType != null && (
            <>
              <h3 className="text-lg font-semibold mt-4">Type of work:</h3>
              <p>{formatTextEnum(selectedJob.workType)}</p>
            </>
          )}

          {selectedJob.employmentType != null && (
            <>
              <h3 className="text-lg font-semibold mt-4">
                Type of employment:
              </h3>
              <p>{formatTextEnum(selectedJob.employmentType)}</p>
            </>
          )}

          {selectedJob.skills != null && (
            <>
              <h3 className="text-lg font-semibold mt-4">Skills:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {selectedJob.skills.map((skill) => (
                  <li key={skill.skillId}>{skill.skillName}</li>
                ))}
              </ul>
            </>
          )}

          {selectedJob.expiryDate != null && (
            <>
              <h3 className="text-lg font-semibold">Expiry date:</h3>
              <p className="italic">
                {selectedJob.expiryDate.split(" ")[0]}{" "}
                {checkExpiryDate(selectedJob.expiryDate) && (
                  <span className="text-red-500"> (Expired)</span>
                )}
              </p>
            </>
          )}
        </CardContent>
      </Card>
    )
  );
}
