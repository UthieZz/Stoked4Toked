function Header() {
  return (
    <header
      style={{
        height: "72px",
        background: "#181818",
        borderBottom: "1px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#fff",
          }}
        >
          Business OS
        </h2>

        <small
          style={{
            color: "#888",
          }}
        >
          StokeD⁴Toke Command Center
        </small>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            color: "#22c55e",
            fontWeight: "bold",
          }}
        >
          ● ONLINE
        </span>

        <span
          style={{
            color: "#aaa",
          }}
        >
          Sprint Zero
        </span>
      </div>
    </header>
  );
}

export default Header;
