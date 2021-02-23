import { ReactElement } from "react";

interface TabsProps {
  activeTab: string;
  label: string;
}

export default function Tabs(props: TabsProps): ReactElement {
  const { activeTab, label } = props;

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return <li className="inline-block bg-yellow-500">{label}</li>;
}
