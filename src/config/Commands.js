// thanks https://www.catswhocode.com/blog/vim-cheat-sheet-for-2016
export default [
  {
    label: "quit",
    command: ":q",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "quit without saving",
    command: ":q!",
    keywords: "escape exit ext quit qut quti qt qti"
  },
  {
    label: "write and quit",
    command: ":x",
    keywords: "quit save sve exit ext qut qti qt qti"
  },
  {
    label: "write / save",
    command: ":w",
    keywords: "save write saving sve"
  },
  {
    label: "insert mode",
    command: "i",
    keywords: "insert write edit insrt"
  },
  {
    label: "open file",
    command: ":o file",
    keywords: "open opn file"
  },
  {
    label: "save file as",
    command: ":saveas file",
    keywords: "save as file"
  },
  {
    label: "⬅️ move left",
    command: "h",
    keywords: "move go to cursor crsor left letf mve moe mvoe"
  },
  {
    label: "➡️ move right",
    command: "l",
    keywords: "move go to cursor crsor riht rgith right mve moe mvoe"
  },
  {
    label: "⬆️ move up",
    command: "k",
    keywords: "move go to up mve moe mvoe cursor cursr crsor"
  },
  {
    label: "⬇️ move down",
    command: "j",
    keywords: "move down dwn mve moe mvoe cursor cursr crsor"
  },
  {
    label: "move the cursor to the end of the word",
    command: "e",
    keywords: "move go to mve moe mvoe cursor cursr word crsor"
  },
  {
    label: "move the cursor to the begining of the word",
    command: "b",
    keywords: "move go to mve moe mvoe begining cursor word cursr crsor"
  },
  {
    label: "move cursor to the beginning of the next word",
    command: "w",
    keywords: "move go to word mve moe mvoe cursor cursr crsor"
  },
  {
    label: "move cursor to the begining of the file",
    command: "gg",
    keywords: "move go to mve moe mvoe begining file cursor cursr crsor"
  },
  {
    label: "move cursor to the end of the file",
    command: "G",
    keywords: "move go to mve moe mvoe end file cursor cursr crsor"
  },
  {
    label: "move cursor to bottom of screen",
    command: "L",
    keywords: "move go to mve moe mvoe screen bottom cursor cursr crsor"
  },
  {
    label: "move cursor to top of screen",
    command: "H",
    keywords: "move go to mve moe mvoe screen top cursor cursr crsor"
  },
  {
    label: "move cursor to middle of screen",
    command: "M",
    keywords: "move go to mve moe mvoe middle screen cursor cursr crsor"
  },
  {
    label: "move cursor to line 59.",
    command: ":59",
    keywords: "move go to mve moe mvoe line cursor cursr crsor"
  },
  {
    label: "move cursor to column 20.",
    command: "20|",
    keywords: "move go to mve moe mvoe column cursor cursr crsor"
  },
  {
    label: "move cursor to matching parenthesis.",
    command: "%",
    keywords: "move go to mve moe mvoe mathching cursor cursr crsor parenthesis"
  },
  {
    label: "Jump to function start",
    command: "[[",
    keywords: "move go to mve moe mvoe function start cursor cursr crsor"
  },
  {
    label: "Jump to block start",
    command: "[{",
    keywords: "move go to mve moe mvoe block start cursor cursr crsor"
  },
  {
    label: "page up",
    command: "<Ctrl> + u",
    keywords: "page up pge up"
  },
  {
    label: "page down",
    command: "<Ctrl> + d",
    keywords: "page down pge down"
  },
  {
    label: "delete current word",
    command: "dw",
    keywords: "delete word"
  },
  {
    label: "delete the current line",
    command: "dd",
    keywords: "delete cut line current"
  },
  {
    label: "copy the current line",
    command: "yy",
    keywords: "copy current line copu cpy"
  },
  {
    label: "Copy the selected text to clipboard",
    command: "y",
    keywords: "copy copu cpy"
  },
  {
    label: "paste",
    command: "p",
    keywords: "paste pste psate"
  },
  {
    label: "Append text following current cursor position",
    command: "a",
    keywords: "write insert append writing writ wrt edit editing edt"
  },
  {
    label: "Append text to the end of current line",
    keywords: "write insert append writing writ wrt edit editing edt",
    command: "A"
  },
  {
    label: "delete and insert inside {. Works with any character",
    command: "ci{",
    keywords: "delete dlete delte inster insert"
  },
  {
    label: 'delete inside "{". Works with any character',
    command: "di{",
    keywords: "delete dlete delte inster insert"
  },
  {
    label: 'go to character "{". Works with any character',
    command: "f{",
    keywords: "move go to character chracter mve"
  },
  {
    label: "turn on syntax highlighting",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax on"
  },
  {
    label: "turn off syntax highlighting",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax off"
  },
  {
    label: "set syntax highlighting language",
    keywords: "syntax color sntax clor highlighting language",
    command: ":set syntax=javascript"
  },
  {
    label: "Insert at new line below",
    command: "o",
    keywords: "Insert new line below nw lne inster insert below"
  },
  {
    label: "Insert at new line above",
    command: "O",
    keywords: "Insert new line above nw lne inster insert above"
  },
  {
    label: "Undo",
    command: "u",
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label: "Redo",
    command: "<Ctrl> + r",
    keywords: "redo"
  },
  {
    label: "cut current character",
    command: "x",
    keywords: "delete cut delte"
  },
  {
    label: "cut previous character",
    command: "X",
    keywords: "dkte delete cut delte"
  },
  {
    label: "cut 3 characters. Works with any numbers",
    command: "3x",
    keywords: "delete cut delte"
  },
  {
    label: "selecting text (characters)",
    command: "v",
    keywords: "visual selection slecting selecting selct"
  },
  {
    label: "selecting text (whole lines)",
    command: "V",
    keywords: "slecting selecting selct"
  },
  {
    label: "replace characters",
    command: "R",
    keywords: "replace rplace replce insert insrt"
  },
  {
    label: "search and replace in the whole file",
    command: ":%s/old/new/g",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace in the current line",
    command: ":s/old/new/g",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace in the whole file (with confirmation)",
    command: ":%s/old/new/gw",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace (case insensitive)",
    command: ":%s/old/new/gi",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "Uppercase character",
    command: "vU",
    keywords: "uppercase upprcase upercase"
  },
  {
    label: "Uppercase line",
    command: "VU",
    keywords: "uppercase upprcase upercase line"
  },
  {
    label: "Lowercase character",
    command: "vu",
    keywords: "lower lowercase lowrecase lowrcase"
  },
  {
    label: "Lowercase line",
    command: "Vu",
    keywords: "lower lowercase lowrecase lowrcase"
  },
  {
    label: "Indent whole file",
    command: "gg=G",
    keywords: "autoindent auto-index autoindentation reindent re-indent"
  },
  {
    label: "re-indent current line",
    command: "==",
    keywords: "autoindent indent auto-index autoindentation reindent re-indent"
  },
  {
    label: "enable line numbers",
    command: ":set number",
    keywords: "display line numbers enable line numbers"
  },
  {
    label: "search (top to bottom)",
    command: "/myWord",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "search (bottom to top)",
    command: "?myWord",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "search",
    command: "/myWord",
    keywords: "srch earch search saerch"
  },
  {
    label: "open vim with directory listing",
    command: "vi .",
    keywords:
      "open file explorer dirctory directory listing browser explrer brower browsr"
  },
  {
    label: "open file index.js with vim, directly at line 86",
    command: "vi index.js +86",
    keywords: "open file line"
  },
  {
    label: "open file explorer (spleen screen horizontally)",
    command: ":Sex",
    keywords: "file explorer directory listing browser explrer brower browsr"
  },
  {
    label: "open file explorer (spleen screen vertically)",
    command: ":Vex",
    keywords: "file explorer directory listing browser explrer brower browsr"
  },
  {
    label: "open new tab",
    command: ":tabnew",
    keywords: "open new tab"
  },
  {
    label: "show next tab",
    command: ":gt",
    keywords: "show next tab"
  },
  {
    label: "Turn on auto-indent",
    command: ":set autoindent",
    keywords: "set autoindent auto-indent"
  },
  {
    label: "indent",
    command: ">>",
    keywords: "indent"
  },
  {
    label: "Un-indent",
    command: "<<",
    keywords: "unindent un-indent"
  },
  {
    label: `execute a unix command - example with "ls"`,
    command: ":!ls",
    keywords: "unix command execute unx commnd excte execte"
  },
  {
    label: "Change colorscheme to blue theme. Use tab to browse colorschemes.",
    command: ":colo blue",
    keywords: "colorscheme color clor theme syntax"
  },
  {
    label: "Split screen horizontally",
    command: ":split",
    keywords: "split window screen splut splt horizontally"
  },
  {
    label: "Split screen vertically",
    command: ":vsplit",
    keywords: "split window screen splut splt horizontally"
  },
  {
    label: "change window in a splitted screen",
    command: "<Ctrl> + w w",
    keywords: "screen window split splut splt horizontally"
  },
  {
    label: "Reload .vimrc without restart vim",
    command: ":so $MYVIMRC",
    keywords: "reload re-load vimrc"
  }
];
