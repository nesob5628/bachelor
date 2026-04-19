import React from "react";

type Topic = {
  synthesiaId?: string;
  subtopicTitle?: string;
};

type StepperProps = {
  topics: Topic[];
  completedVideoIds: string[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleMarkCompleted: (synthesiaId: string) => void;
  text: {
    done: string;
    markDone: string;
  };
};

const Stepper: React.FC<StepperProps> = ({
  topics,
  completedVideoIds,
  currentStep,
  setCurrentStep,
  handleMarkCompleted,
  text,
}) => {
  return (
    <ol className="pkt-stepper pkt-stepper--vertical">
      {topics.map((item, i) => {
        const completed =
          !!item.synthesiaId && completedVideoIds.includes(item.synthesiaId);

        let stepClass = "pkt-step";
        if (completed) stepClass += " pkt-step--completed";
        else if (i === currentStep) stepClass += " pkt-step--current";
        else stepClass += " pkt-step--incomplete";

        return (
          <li key={item.synthesiaId || i} className={stepClass}>
            <span className="pkt-step__line pkt-step__line--1" aria-hidden="true" />
            <span className="pkt-step__line pkt-step__line--2" aria-hidden="true" />

            <span className="pkt-step__indicator">
              {completed ? (
                <svg width="24" height="24" fill="none">
                  <path fill="#2A2859" d="M3 3h18v18H3z" />
                  <path
                    d="m10.34 16-1.11-1.14L7 12.58l1.11-1.15 2.23 2.28L15.88 8 17 9.15l-5.55 5.71L10.34 16Z"
                    fill="#F1FDFF"
                  />
                </svg>
              ) : i === currentStep ? (
                <svg width="24" height="24" fill="none">
                  <circle opacity=".15" cx="12" cy="12" r="12" fill="#2A2859" />
                  <circle cx="12" cy="12" r="6" fill="#2A2859" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    style={{ fill: "var(--pkt-color-grays-grey-200, #CCC)" }}
                  />
                </svg>
              )}
            </span>

            <span className="pkt-step__line pkt-step__line--3" aria-hidden="true" />

            <div className="pkt-step__wrapper">
              <div
                className="pkt-step__title"
                onClick={() => setCurrentStep(i)}
                style={{ cursor: "pointer" }}
              >
                {item.subtopicTitle}
              </div>

              {i === currentStep && (
                <div className="pkt-step__content">
                  {item.synthesiaId && (
                    <iframe
                      width="100%"
                      height="300"
                      src={`https://share.synthesia.io/embeds/videos/${item.synthesiaId}`}
                      title={item.subtopicTitle}
                      allow="encrypted-media; fullscreen;"
                      allowFullScreen
                    />
                  )}

                  {item.synthesiaId && (
                    <button
                      className="pkt-button"
                      onClick={() => handleMarkCompleted(item.synthesiaId!)}
                      disabled={completed}
                    >
                      {completed ? text.done : text.markDone}
                    </button>
                  )}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;