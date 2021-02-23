import { ReactElement, useState } from "react";
import Tab from "./Tab";

function Tabs(props: any): ReactElement {
  const { children } = props;
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="text-left">
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child: { props: { id: string } }) => {
            console.log(child);
            const { id } = child.props;

            return <Tab activeTab={activeTab} key={id} label={id} />;
          })}
        </ol>
        <div className="tab-content">
          {children.map(
            (child: { props: { label: string; children: any } }) => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
