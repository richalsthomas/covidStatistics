const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function useDarkmodeProp({
  xaxis,
  yaxis,
  title,
}: {
  xaxis?: string;
  yaxis?: string;
  title?: string;
}) {
  const lightModeLayout = {
    title: title,
    paper_bgcolor: "white",
    plot_bgcolor: "white",
    font: {
      color: "black",
    },
    xaxis: {
      title: xaxis,
      color: "black",
      gridcolor: "#e0e0e0",
    },
    yaxis: {
      title: yaxis,
      color: "black",
      gridcolor: "#e0e0e0",
    },
  };

  const darkModeLayout = {
    title: title,
    paper_bgcolor: "#1e1e1e",
    plot_bgcolor: "#1e1e1e",
    font: {
      color: "white",
    },
    xaxis: {
      title: xaxis,
      color: "white",
      gridcolor: "#444",
    },
    yaxis: {
      title: yaxis,
      color: "white",
      gridcolor: "#444",
    },
  };

  const layout = isDarkMode ? darkModeLayout : lightModeLayout;

  return layout;
}
