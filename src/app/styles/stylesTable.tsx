export const customStylesTable = {
  rows: {
    style: {
      "&:nth-of-type(odd)": { backgroundColor: "#ffffff" },
      "&:nth-of-type(even)": { backgroundColor: "#f2f2f2" },
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
      color: "white",
      backgroundColor: "green",
      fontSize: "17px",
      padding: "10px",
    },
  },
  cells: { style: { padding: "10px", fontSize: "16px" } },
  table: {
    style: {
      padding: "0px",
      boxShadow: "0px 4px 8px rgb(255, 4, 4)",
      width: "96.65vw",
    },
  },
};
