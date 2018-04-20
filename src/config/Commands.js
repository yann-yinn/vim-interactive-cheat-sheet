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
    label: "page up",
    mode: "normal",
    command: "<Ctrl> + u",
    keywords: "page up pge up"
  },
  {
    label: "delete the current line",
    mode: "normal",
    command: "dd",
    keywords: "delete line current"
  },
  {
    label: "copy the current line",
    mode: "normal",
    command: "yy",
    keywords: "copy current line copu cpy"
  },
  {
    label: "paste",
    mode: "normal",
    command: "p",
    keywords: "paste pste psate"
  },
  {
    label: "page down",
    mode: "normal",
    command: "<Ctrl> + d",
    keywords: "page down pge down"
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
    label: "append text",
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
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label: "Redo",
    mode: "normal",
    command: "<Ctrl> + r",
    keywords: "redo"
  },
  {
    label: "delete character",
    mode: "normal",
    description: "Delete [count] characters under and after the cursor",
    command: "x",
    keywords: "delete delte"
  },
  {
    label: "delete character",
    mode: "normal",
    description: "Delete [count] characters before the cursor",
    command: "X",
    keywords: "dkte delete delte"
  },
  {
    label: "selecting text",
    mode: "normal",
    description: "start Visual mode per character.",
    command: "v",
    keywords: "slecting selecting selct"
  },
  {
    label: "selecting text",
    mode: "normal",
    description: "start Visual mode per character.",
    command: "v",
    keywords: "slecting selecting selct"
  },
  {
    label: "replace character",
    mode: "normal",
    description:
      "Enter Insert mode, replacing characters rather than inserting",
    command: "R",
    keywords: "replace rplace replce"
  },
  {
    label: "indentation",
    mode: "normal",
    command: "gg=G",
    keywords: "autoindent auto-index autoindentation reindent re-indent"
  },
  {
    label: "enable line numbers",
    mode: "normal",
    command: ":set number",
    keywords: "display line numbers enable line numbers"
  },
  {
    label: "Search",
    mode: "normal",
    command: "/myWord",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "Search",
    mode: "insert",
    command: "<ESC> /myWord",
    keywords: "srch earch search saerch"
  },
  {
    label: "Switch to command mode",
    mode: "insert",
    command: "<Esc>",
    keywords: "switch command mode change mode"
  }
];
