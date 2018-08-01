export default [
  {
    label: "Quit the current window. Quit vim if this is the last window.",
    command: ":q",
    keywords: "quit qut qti qt qti close clse window wndow"
  },
  {
    label: "Exit vim, closing all windows.",
    command: ":qa",
    keywords: "quit qut qti qt qti close clse"
  },
  {
    label: "Exit vim. Any changes are lost.",
    command: ":qall!",
    keywords: "quit qut qti qt qti close clse"
  },
  {
    label: "Quit without saving changes",
    command: ":q!",
    keywords: "escape exit ext close quit qut quti qt qti"
  },
  {
    label: "Write the current file and quit",
    command: ":x",
    keywords: "quit save sve exit write wrte ext qut qti qt qti"
  },
  {
    label: "Write the current file",
    command: ":w",
    keywords: "save write saving sve"
  },
  {
    label: "Insert text before the cursor",
    command: "i",
    keywords: "insert write edit insrt"
  },
  {
    label:
      "Save the current buffer under the name {file} and the filename of the current buffer to {file}",
    command: ":saveas {file}",
    keywords: "save as file buffer filename"
  },
  {
    label: "⬅️ Move the cursor to the left",
    command: "h",
    keywords: "move go to cursor crsor left letf mve moe mvoe"
  },
  {
    label: "➡️ Move the cursor to the right",
    command: "l",
    keywords: "move go to cursor crsor riht rgith right mve moe mvoe"
  },
  {
    label: "⬆️ Move the cursor up",
    command: "k",
    keywords: "move go to up mve moe mvoe cursor cursr crsor"
  },
  {
    label: "⬇️ Move the cursor down",
    command: "j",
    keywords: "move down dwn mve moe mvoe cursor cursr crsor"
  },
  {
    label: "Move the cursor to the end of the word (inclusive)",
    command: "e",
    keywords: "move jump go to mve moe mvoe cursor cursr word crsor"
  },
  {
    label: "Move the cursor to the begining of the word",
    command: "b",
    keywords: "move go jump to mve moe mvoe begining cursor word cursr crsor"
  },
  {
    label: "Move cursor to the beginning of the next word",
    command: "w",
    keywords: "move jump go to word next begin mve moe mvoe cursor cursr crsor"
  },
  {
    label: "Go to  first line of the file",
    command: "gg",
    keywords:
      "move jump first line go to mve moe mvoe begining file cursor cursr crsor"
  },
  {
    label: "Go to the last line and last character of the file",
    command: "G",
    keywords:
      "move jump go to mve last line moe mvoe end file cursor cursr crsor"
  },
  {
    label: "Move to the top of window",
    command: "H",
    keywords:
      "move jump go to mve moe mvoe wndow window screen top cursor cursr crsor"
  },
  {
    label: "Move to Middle line of window on the first non-blank character",
    command: "M",
    keywords:
      "move jump go to mve moe mvoe middle wndow window screen cursor cursr crsor"
  },
  {
    label: "Move cursor to line 59.",
    command: ":59",
    keywords: "move jump go to mve moe mvoe line cursor cursr crsor"
  },
  {
    label: "Move cursor to the end of line",
    command: "$",
    keywords: "move end line jump go to mve moe mvoe column cursor cursr crsor"
  },
  {
    label: "Move cursor to first non-blank character of the line.",
    command: "^",
    keywords: "move end line jump go to mve moe mvoe column cursor cursr crsor"
  },
  {
    label: "Move to the matching parenthesis, curly / square bracket",
    command: "%",
    keywords:
      "move jump go to mve moe mvoe mathching curly square bracket cursor cursr crsor parenthesis"
  },
  {
    label: "Scroll by half a page up",
    command: "C-u",
    keywords: "page up pge up"
  },
  {
    label: "Scroll by half a page down",
    command: "C-d",
    keywords: "page down pge down"
  },
  {
    label: "Delete the chararacters under the cursor until the end of the line",
    command: "D",
    keywords: "delete dlte cut line end"
  },
  {
    label:
      "Delete the word from the position cursor is on till the end of the word",
    command: "dw",
    keywords: "delete dlte cut word"
  },
  {
    label: "Delete current line",
    command: "dd",
    keywords: "delete cut line current"
  },
  {
    label: "Delete inside {",
    command: "di{",
    keywords: "delete inside {"
  },
  {
    label: "Yank the current line",
    command: "yy",
    keywords: "copy yank paste pste current line copu cpy"
  },
  {
    label: "Yank the selected text to clipboard",
    command: "y",
    keywords: "copy yank paste pste copu cpy past pste"
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
    label: "delete and insert inside {",
    command: "ci{",
    keywords: "delete dlete delte inster insert"
  },
  {
    label: 'go to character "{". Works with any character',
    command: "f{",
    keywords: "move go jump to character chracter mve"
  },
  {
    label: 'go to previous occurence of "{". Works with any character',
    command: "F{",
    keywords: "go move jump previous occurence find character"
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
    keywords: "Insert write new line below nw lne inster insert below"
  },
  {
    label: "Insert at new line above",
    command: "O",
    keywords: "Insert write new line above nw lne inster insert above"
  },
  {
    label: "Undo",
    command: "u",
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label: "Undo all changes on current line",
    command: "U",
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label: "Redo",
    command: "C-r",
    keywords: "redo"
  },
  {
    label: "cut current character",
    command: "x",
    keywords: "delete character cut delte"
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
    label: "select text (characters)",
    command: "v",
    keywords: "visual selection slecting selecting selct"
  },
  {
    label: "select text (whole lines)",
    command: "V",
    keywords: "slecting selecting selct visual line"
  },
  {
    label: "select text (block)",
    command: "C-V",
    keywords: "slecting selecting visual block selct"
  },
  {
    label: "replace selection",
    command: "s",
    keywords: "visual selection slecting selecting selct"
  },
  {
    label: "Delete line and insert",
    command: "S",
    keywords: "delete insert write line"
  },
  {
    label: "Delete until end of line and insert",
    command: "C",
    keywords: "delete insert write end line"
  },
  {
    label: "replace characters",
    command: "R",
    keywords: "replace write rplace replce insert insrt"
  },
  {
    label: "replace a single character",
    command: "r",
    keywords: "replace write rplace replce insert insrt"
  },
  {
    label: "search and replace in the whole file",
    command: ":%s/old/new/g",
    keywords: "search find replace reaplce serch sarch sreach rplace"
  },
  {
    label: "next occurence of the current word",
    command: "*",
    keywords: "search find next occurence"
  },
  {
    label: "search and replace in the current line",
    command: ":s/old/new/g",
    keywords: "search find replace reaplce serch sarch sreach rplace"
  },
  {
    label: "Replace all occurences with confirmation",
    command: ":%s/old/new/gc",
    keywords:
      "search find replace occurences ocurences reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace (case insensitive)",
    command: ":%s/old/new/gi",
    keywords: "search find replace reaplce serch sarch sreach rplace"
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
    keywords: "/ srch find search saerch"
  },
  {
    label: "search result : next occurence in same direction",
    command: "n",
    keywords: "/ srch find search saerch next result"
  },
  {
    label: "search result : next occurence in opposite direction",
    command: "N",
    keywords:
      "/ srch earch find search saerch next result reverse opposite backwards"
  },
  {
    label: "search (bottom to top)",
    command: "?myWord",
    keywords: "/ srch find search saerch"
  },
  {
    label: "search",
    command: "/myWord",
    keywords: "srch earch find search saerch"
  },
  {
    label: "open vim with directory listing",
    command: "vim .",
    keywords:
      "open file explorer dirctory directory listing browser explrer brower browsr"
  },
  {
    label: "open file index.js with vim, directly at line 86",
    command: "vi index.js +86",
    keywords: "open file line"
  },
  {
    label: "open file explorer (split window horizontally)",
    command: ":Sex",
    keywords:
      "file open explorer directory listing browser explrer brower browsr"
  },
  {
    label: "open file explorer (split window vertically)",
    command: ":Vex",
    keywords:
      "file open explorer directory listing browser explrer brower browsr"
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
    label: "Split window horizontally",
    command: ":split",
    keywords: "split window wndow splut splt horizontally"
  },
  {
    label: "Split window vertically",
    command: ":vsplit",
    keywords: "split window wndow splut splt horizontally"
  },
  {
    label: "switch window",
    command: "C-w w",
    keywords: "wndow window change switch split splut splt horizontally"
  },
  {
    label: "Reload .vimrc without restarting vim",
    command: ":so $MYVIMRC",
    keywords: "reload re-load vimrc"
  },
  {
    label: "Jump to the beginning of the line (first non-blank character)",
    command: "^",
    keywords: "go to start beginning line jump"
  },
  {
    label: "enable mouse support",
    command: ":set mouse=a",
    keywords: "mouse mose muse enable"
  },
  {
    label: 'set a mark : type "m" followed by a letter',
    command: "ma",
    keywords: "marks bookmark"
  },
  {
    label: 'jump to mark "a"',
    command: "'a",
    keywords: "marks bookmark"
  },
  {
    label: "list all marks",
    command: ":marks",
    keywords: "list marks bookmark"
  },
  {
    label: "delete all marks",
    command: ":delmarks!",
    keywords: "delete marks bookmark"
  },
  {
    label: 'delete mark "a"',
    command: ":delmarks a",
    keywords: "delete marks bookmark"
  },
  {
    label: "repeat last change in normal mode",
    command: ".",
    keywords: "reapet change last repeat"
  },
  {
    label:
      'Display help about {subject}. {subject} can include wildcards like "*", "?" and "[a-z]"',
    command: ":help {subject}",
    keywords: "help hlp"
  }
];
