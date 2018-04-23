// thanks https://www.catswhocode.com/blog/vim-cheat-sheet-for-2016
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
    command: ":q!",
    keywords: "escape exit ext quit qut quti qt qti"
  },
  {
    label: "write and quit",
    mode: "normal",
    command: ":x",
    keywords: "quit save sve exit ext qut qti qt qti"
  },
  {
    label: "write / save",
    mode: "normal",
    command: ":w",
    keywords: "save write saving sve",
    memo: "*w*rite"
  },
  {
    label: "insert mode",
    mode: "normal",
    command: "i",
    keywords: "insert write edit insrt",
    memo: "*i*nsert"
  },
  {
    label: "⬅️ move left",
    mode: "normal",
    command: "h",
    keywords: "move go to cursor crsor left letf mve moe mvoe"
  },
  {
    label: "➡️ move right",
    mode: "normal",
    command: "l",
    keywords: "move go to cursor crsor riht rgith right mve moe mvoe"
  },
  {
    label: "⬆️ move up",
    mode: "normal",
    command: "k",
    keywords: "move go to up mve moe mvoe cursor cursr crsor"
  },
  {
    label: "⬇️ move down",
    mode: "normal",
    command: "j",
    keywords: "move down dwn mve moe mvoe cursor cursr crsor"
  },
  {
    label: "move the cursor to the end of the word",
    mode: "normal",
    command: "e",
    keywords: "move go to mve moe mvoe cursor cursr word crsor",
    memo: "*e*nd of the word"
  },
  {
    label: "move the cursor to the begining of the word",
    mode: "normal",
    command: "b",
    keywords: "move go to mve moe mvoe begining cursor word cursr crsor",
    memo: "*b*eginning of the word"
  },
  {
    label: "move the cursor to the beginning of the next word",
    mode: "normal",
    command: "w",
    keywords: "move go to word mve moe mvoe cursor cursr crsor",
    memo: "next *w*ord"
  },
  {
    label: "move the cursor to the begining of the file",
    mode: "normal",
    command: "gg",
    keywords: "move go to mve moe mvoe begining file cursor cursr crsor"
  },
  {
    label: "move the cursor to the end of the file",
    mode: "normal",
    command: "G",
    keywords: "move go to mve moe mvoe end file cursor cursr crsor"
  },
  {
    label: "move the cursor to the bottom of the screen",
    mode: "normal",
    command: "L",
    keywords: "move go to mve moe mvoe bottom cursor cursr crsor"
  },
  {
    label: "move cursor to line 59.",
    mode: "normal",
    command: ":59",
    keywords: "move go to mve moe mvoe line cursor cursr crsor"
  },
  {
    label: "move cursor to column 20.",
    mode: "normal",
    command: "20|",
    keywords: "move go to mve moe mvoe column cursor cursr crsor"
  },
  {
    label: "move cursor to matching parenthesis.",
    mode: "normal",
    command: "%",
    keywords: "move go to mve moe mvoe mathching cursor cursr crsor parenthesis"
  },
  {
    label: "Jump to function start",
    mode: "normal",
    command: "[[",
    keywords: "move go to mve moe mvoe function start cursor cursr crsor"
  },
  {
    label: "Jump to block start",
    mode: "normal",
    command: "[{",
    keywords: "move go to mve moe mvoe block start cursor cursr crsor"
  },
  {
    label: "page up",
    mode: "normal",
    command: "<Ctrl> + u",
    keywords: "page up pge up",
    memo: "*u*p"
  },
  {
    label: "page down",
    mode: "normal",
    command: "<Ctrl> + d",
    keywords: "page down pge down",
    memo: "*d*own"
  },
  {
    label: "delete current word",
    mode: "normal",
    command: "dw",
    keywords: "delete word",
    memo: "*d*elete *w*ord"
  },
  {
    label: "delete the current line",
    mode: "normal",
    command: "dd",
    keywords: "delete cut line current"
  },
  {
    label: "copy the current line",
    mode: "normal",
    command: "yy",
    keywords: "copy current line copu cpy",
    memo: "*y*ank"
  },
  {
    label: "Copy the selected text to clipboard",
    mode: "normal",
    command: "y",
    keywords: "copy copu cpy",
    memo: "*y*ank"
  },
  {
    label: "paste",
    mode: "normal",
    command: "p",
    keywords: "paste pste psate",
    memo: "*p*aste"
  },
  {
    label: "Append text following current cursor position",
    mode: "normal",
    command: "a",
    keywords: "write insert append writing writ wrt edit editing edt",
    memo: "*a*ppend"
  },
  {
    label: "Append text to the end of current line",
    mode: "normal",
    keywords: "write insert append writing writ wrt edit editing edt",
    command: "A",
    memo: "*A*ppend"
  },
  {
    label: "delete and insert inside {. Works with any character",
    mode: "normal",
    command: "ci{",
    memo: "*c*hange *i*nside",
    keywords: "delete dlete delte inster insert"
  },
  {
    label: 'delete inside "{". Works with any character',
    mode: "normal",
    command: "di{",
    memo: "*d*elete *i*nside",
    help: 'replace "{" by any character ',
    keywords: "delete dlete delte inster insert"
  },
  {
    label: 'go to character "{". Works with any character',
    mode: "normal",
    command: "f{",
    help: 'replace "{" by any character ☺️ ',
    keywords: "move go to character chracter mve"
  },
  {
    label: "turn on syntax highlighting",
    mode: "normal",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax on"
  },
  {
    label: "turn off syntax highlighting",
    mode: "normal",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax off"
  },
  {
    label: "set syntax highlighting language",
    mode: "normal",
    keywords: "syntax color sntax clor highlighting language",
    command: ":set syntax=javascript"
  },
  {
    label: "Insert at new line below",
    mode: "normal",
    command: "o",
    keywords: "Insert new line below nw lne inster insert below"
  },
  {
    label: "Insert at new line above",
    mode: "normal",
    command: "O",
    keywords: "Insert new line above nw lne inster insert above"
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
    label: "cut current character",
    mode: "normal",
    command: "x",
    keywords: "delete cut delte",
    memo: "*d*elete"
  },
  {
    label: "cut previous character",
    mode: "normal",
    command: "X",
    keywords: "dkte delete cut delte"
  },
  {
    label: "cut 3 characters. Works with any numbers",
    mode: "normal",
    command: "3x",
    keywords: "delete cut delte",
    memo: "*d*elete"
  },
  {
    label: "selecting text (characters)",
    mode: "visual",
    command: "v",
    keywords: "visual selection slecting selecting selct"
  },
  {
    label: "selecting text (whole lines)",
    mode: "visual",
    command: "V",
    keywords: "slecting selecting selct"
  },
  {
    label: "replace characters",
    mode: "normal",
    command: "R",
    keywords: "replace rplace replce insert insrt"
  },
  {
    label: "search and replace in the whole file",
    mode: "normal",
    command: ":%s/old/new/g",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace in the current line",
    mode: "normal",
    command: ":s/old/new/g",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace in the whole file (with confirmation)",
    mode: "normal",
    command: ":%s/old/new/gw",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace (case insensitive)",
    mode: "normal",
    command: ":%s/old/new/gi",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "Uppercase character",
    mode: "normal",
    command: "vU",
    keywords: "uppercase upprcase upercase"
  },
  {
    label: "Uppercase line",
    mode: "normal",
    command: "VU",
    keywords: "uppercase upprcase upercase line"
  },
  {
    label: "Lowercase character",
    mode: "normal",
    command: "vu",
    keywords: "lower lowercase lowrecase lowrcase"
  },
  {
    label: "Lowercase line",
    mode: "normal",
    command: "Vu",
    keywords: "lower lowercase lowrecase lowrcase"
  },
  {
    label: "Indent whole file",
    mode: "normal",
    command: "gg=G",
    keywords: "autoindent auto-index autoindentation reindent re-indent"
  },
  {
    label: "re-indent current line",
    mode: "normal",
    command: "==",
    keywords: "autoindent indent auto-index autoindentation reindent re-indent"
  },
  {
    label: "enable line numbers",
    mode: "normal",
    command: ":set number",
    keywords: "display line numbers enable line numbers"
  },
  {
    label: "search (top to bottom)",
    mode: "normal",
    command: "/myWord",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "search (bottom to top)",
    mode: "normal",
    command: "?myWord",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "search",
    mode: "normal",
    command: "/myWord",
    keywords: "srch earch search saerch"
  },
  {
    label: "open vim with directory listing",
    mode: "normal",
    command: "vi .",
    keywords:
      "open file explorer dirctory directory listing browser explrer brower browsr"
  },
  {
    label: "open file index.js with vim, directly at line 86",
    mode: "normal",
    command: "vi index.js +86",
    keywords: "open file line"
  },
  {
    label: "open file explorer (spleen screen horizontally)",
    mode: "normal",
    command: ":Sex",
    keywords: "file explorer directory listing browser explrer brower browsr"
  },
  {
    label: "open file explorer (spleen screen vertically)",
    mode: "normal",
    command: ":Vex",
    keywords: "file explorer directory listing browser explrer brower browsr"
  },
  {
    label: "open new tab",
    mode: "normal",
    command: ":tabnew",
    keywords: "open new tab"
  },
  {
    label: "show next tab",
    mode: "normal",
    command: ":gt",
    keywords: "show next tab"
  },
  {
    label: "Turn on auto-indent",
    mode: "normal",
    command: ":set autoindent",
    keywords: "set autoindent auto-indent"
  },
  {
    label: "indent",
    mode: "normal",
    command: ">>",
    keywords: "indent"
  },
  {
    label: "Un-indent",
    mode: "normal",
    command: "<<",
    keywords: "unindent un-indent"
  },
  {
    label: `execute a unix command - example with "ls"`,
    mode: "normal",
    command: ":!ls",
    keywords: "unix command execute unx commnd excte execte"
  },
  {
    label: "Change colorscheme to blue theme. Use tab to browse colorschemes.",
    mode: "normal",
    command: ":colo blue",
    keywords: "colorscheme color clor theme syntax"
  },
  {
    label: "Split screen horizontally",
    mode: "normal",
    command: ":split",
    keywords: "split screen splut splt horizontally"
  },
  {
    label: "Split screen vertically",
    mode: "normal",
    command: ":vsplit",
    keywords: "split screen splut splt horizontally"
  },
  {
    label: "change window in a splitted screen",
    mode: "normal",
    command: "<Ctrl> + w w",
    keywords: "screen splut splt horizontally"
  }
];
