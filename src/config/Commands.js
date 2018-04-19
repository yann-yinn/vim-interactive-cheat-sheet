export default [
  {
    label: "quit",
    mode: "normal",
    command: ":q",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "quit without saving",
    mode: "normal",
    description: "",
    command: ":q!",
    keywords: "quit qut quti qt qti"
  },
  {
    label: "save",
    description: "",
    mode: "normal",
    command: ":w",
    keywords: "save saving sve"
  },
  {
    label: "Append text following current cursor position",
    mode: "normal",
    command: "a",
    keywords: "write writing writ wrt edit editing edt"
  },
  {
    label: "Append text to the end of current line",
    mode: "normal",
    keywords: "write writing writ wrt edit editing edt",
    command: "A"
  },
  {
    label: "apprend text",
    description: "Insert text before the current cursor position",
    mode: "normal",
    keywords: "write writing writ wrt edit editing edt",
    command: "A"
  },
  {
    label: "syntax highlighting",
    description: "Turn on color syntax highlighting",
    mode: "normal",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax on"
  }
];
