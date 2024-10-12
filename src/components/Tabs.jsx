export function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];

  const getTaskCount = (tab) => {
    switch (tab) {
      case "All":
        return todos.length;
      case "Open":
        return todos.filter((todo) => !todo.complete).length;
      case "Completed":
        return todos.filter((todo) => todo.complete).length;
      default:
        return 0;
    }
  };

  return (
    <nav className="tab-container">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            onClick={() => setSelectedTab(tab)}
            key={tab}
            className={`tab-button${
              tab === selectedTab ? " tab-selected" : ""
            }`}
          >
            {tab}
            <span className="task-count">({getTaskCount(tab)})</span>
          </button>
        ))}
      </div>
      <hr />
    </nav>
  );
}
