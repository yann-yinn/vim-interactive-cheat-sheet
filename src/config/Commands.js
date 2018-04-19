export default [
  {
    label: "quit",
    mode: "normal",
    command: ":q",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "quit",
    mode: "insert",
    command: "<ESC> :q",
    keywords: "escape quit qut qti qt qti"
  },
  {
    label: "quit without saving",
    mode: "normal",
    command: "q!",
    keywords: "escape quit qut quti qt qti"
  },
  {
    label: "quit",
    mode: "insert",
    command: "<ESC> :q",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "write and quit",
    mode: "normal",
    command: ":x",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "write and quit",
    mode: "insert",
    command: "<ESC> :x",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "insert mode.",
    description: "insert mode. Next keys typed are inserted into the file.",
    mode: "normal",
    command: ":q!",
    keywords: "insert write edit insrt"
  },
  {
    label: "move left",
    mode: "normal",
    command: "h",
    keywords: "move left letf mve moe mvoe"
  },
  {
    label: "move right",
    mode: "normal",
    command: "l",
    keywords: "move riht rgith right mve moe mvoe"
  },
  {
    label: "move up",
    mode: "normal",
    command: "k",
    keywords: "move up mve moe mvoe"
  },
  {
    label: "move down",
    mode: "normal",
    command: "j",
    keywords: "move down dwn mve moe mvoe"
  },
  {
    label: "save",
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
  },
  {
    label: "Insert at new line below",
    mode: "normal",
    command: "o",
    keywords: "Insert new line below nw lne inster insert below"
  },
  {
    label: "Undo",
    mode: "normal",
    command: "u",
    keywords: "undo udo ndo udno"
  },
  {
    label: "Search",
    mode: "normal",
    command: "/myWord",
    keywords: "srch earch search saerch"
  },
  {
    label: "Search",
    mode: "insert",
    command: "<ESC> /myWord",
    keywords: "srch earch search saerch"
  }
];
