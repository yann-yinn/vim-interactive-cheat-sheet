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
    label: "Put the text [from register x] after the cursor [count] times",
    command: "p",
    keywords: "paste pste psate put"
  },
  {
    label: "Append text after the cursor [count] times",
    command: "a",
    keywords: "write insert append writing writ wrt edit editing edt"
  },
  {
    label: "Append text at the end of the line [count] times",
    keywords: "write insert append writing writ wrt edit editing edt",
    command: "A"
  },
  {
    label: "delete and insert inside {",
    command: "ci{",
    keywords: "delete dlete delte inster insert"
  },
  {
    label: "Go to [count]'th occurence of {char} to the right",
    command: "f{char}",
    keywords: "move go jump to character chracter mve"
  },
  {
    label: "Go to [count]'th occurence of {char} to the left",
    command: "F{char}",
    keywords: "go move jump previous occurence find character"
  },
  {
    label: "Turn on syntax highlighting",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax on"
  },
  {
    label: "Turn off syntax highlighting",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax off"
  },
  {
    label: "set syntax highlighting language",
    keywords: "syntax color sntax clor highlighting language",
    command: ":set syntax=javascript"
  },
  {
    label:
      "Begin a new line below the cursor and insert text, repeat [count] times",
    command: "o",
    keywords: "Insert write new line below nw lne inster insert below"
  },
  {
    label:
      "Begin a new line above the cursor and insert text, repeat [count] times",
    command: "O",
    keywords: "Insert write new line above nw lne inster insert above"
  },
  {
    label: "Undo [count] changes",
    command: "u",
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label:
      "Undo all latest changes on one line, the line were the latest changes where made",
    command: "U",
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label: "Redo [count] changes which were undone",
    command: "CTRL-R",
    keywords: "redo undo"
  },
  {
    label:
      "Delete [count] characters under and after the cursor [into register x]",
    command: "x",
    keywords: "delete character cut delte"
  },
  {
    label: "Start visual mode per character",
    command: "v",
    keywords: "visual selection slecting selecting selct"
  },
  {
    label: "Start visual mode linewise",
    command: "V",
    keywords: "slecting selecting selct visual line"
  },
  {
    label: "Start visual mode blockwise",
    command: "CTRL-V",
    keywords: "slecting selecting visual block selct"
  },
  {
    label:
      "Delete [count] characters [into register x] and start insert ( s stands for substitute)",
    command: "s",
    keywords: "visual selection slecting selecting selct"
  },
  {
    label:
      "Delete [count] lines [into register x] and start insert (s stands for substitute)",
    command: "S",
    keywords: "delete insert write line"
  },
  {
    label:
      "Delete from the cursor position to the end of the line and start insert.",
    command: "C",
    keywords: "delete insert write end line"
  },
  {
    label:
      "Enter replace mode : Each character you type replaces an existing character under the cursor",
    command: "R",
    keywords: "replace write rplace replce insert insrt"
  },
  {
    label: "Replace the character under the cursor with {char}",
    command: "r{char}",
    keywords: "replace write rplace replce insert insrt"
  },
  {
    label: "Search and replace in the whole file",
    command: ":%s/old/new/g",
    keywords: "search find replace reaplce serch sarch sreach rplace"
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
    label: "Search and replace (case insensitive)",
    command: ":%s/old/new/gi",
    keywords: "search find replace reaplce serch sarch sreach rplace"
  },
  {
    label:
      "Search forward for the [count]'th occurence of the word nearest to the cursor.",
    command: "*",
    keywords: "search find next occurence ocurence"
  },
  {
    label: 'Same as "*", but search backwards. ',
    command: "#",
    keywords: "search find next occurence ocurence"
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
    label:
      "Switch case of the character under the cursor and move the cursor to the right",
    command: "~",
    keywords: "lower lowercase lowrecase lowrcase uppercase upercase uppercase"
  },
  {
    label: "Reindent current line",
    command: "==",
    keywords: "autoindent indent auto-index autoindentation reindent re-indent"
  },
  {
    label: "Display line numbers",
    command: ":set number",
    keywords: "display line numbers nmbers enable line numbers"
  },
  {
    label: "Search forward for the [count]'th occurence of {pattern}",
    command: "/{pattern}",
    keywords: "/ ? srch find search saerch"
  },
  {
    label: "Search backward for the [count]'th previous occurence of {pattern}",
    command: "?{patten}",
    keywords: "/ ? srch find search saerch"
  },
  {
    label: "Search result : next occurence in same direction",
    command: "n",
    keywords: "/ srch find search saerch next result"
  },
  {
    label: "Search result : next occurence in opposite direction",
    command: "N",
    keywords:
      "/ srch earch find search saerch next result reverse opposite backward"
  },
  {
    label: "Open vim with directory listing",
    command: "vim .",
    keywords:
      "open file explorer dirctory directory listing browser explrer brower browsr"
  },
  {
    label: "Open file index.js with Vim, jumping directly at line 86",
    command: "vim index.js +86",
    keywords: "open file line"
  },
  {
    label: "Open file explorer (split window horizontally)",
    command: ":Sex",
    keywords:
      "file open explorer directory listing browser explrer brower browsr"
  },
  {
    label: "Open file explorer (split window vertically)",
    command: ":Vex",
    keywords:
      "file open explorer directory listing browser explrer brower browsr"
  },
  {
    label:
      "Open a new tab page with an empty window, after the current tab page",
    command: ":tabnew",
    keywords: "Go goto open new tab"
  },
  {
    label: "Go to the next tab page",
    command: ":gt",
    keywords: "Go to goto show next tab"
  },
  {
    label: "Turn on auto-indent",
    command: ":set autoindent",
    keywords: "set autoindent auto-indent"
  },
  {
    label: "Indent",
    command: ">>",
    keywords: "indent"
  },
  {
    label: "Un-indent",
    command: "<<",
    keywords: "unindent un-indent"
  },
  {
    label: "Execute {cmd} with the shell",
    command: ":!{cmd}",
    keywords: "unix command execute unx commnd excte execte"
  },
  {
    label: "Load color sheme {name}",
    command: ":colo {name}",
    keywords: "colorscheme color clor theme syntax"
  },
  {
    label: "Split current window horizontally",
    command: ":split",
    keywords: "split window wndow splut splt horizontally"
  },
  {
    label: "Split current window vertically",
    command: ":vsplit",
    keywords: "split window wndow splut splt horizontally"
  },
  {
    label: "Go to N next window",
    command: "CTRL-W w",
    keywords: "wndow window change switch split splut splt horizontally"
  },
  {
    label: "Reload .vimrc without restarting vim",
    command: ":so $MYVIMRC",
    keywords: "reload re-load vimrc"
  },
  {
    label: "Enable mouse support",
    command: ":set mouse=a",
    keywords: "mouse mose muse enable"
  },
  {
    label: 'Set a mark at cursor position: type "m" followed by a letter',
    command: "m{a-zA-Z}",
    keywords: "marks bookmark mrk"
  },
  {
    label: "Jump to the mark {a-z} in the current buffer",
    command: "'{a-zA-Z}",
    keywords: "marks bookmark mrk"
  },
  {
    label: "List all the current marks",
    command: ":marks",
    keywords: "list marks bookmark"
  },
  {
    label: "delete all marks",
    command: ":delmarks!",
    keywords: "delete marks bookmark"
  },
  {
    label: "Delete the specified marks",
    command: ":delmarks {marks}",
    keywords: "delete marks bookmark"
  },
  {
    label: "Repeat last change.",
    command: ".",
    keywords: "reapet change last repeat rpeat"
  },
  {
    label:
      'Display help about {subject}. {subject} can include wildcards like "*", "?" and "[a-z]"',
    command: ":help {subject}",
    keywords: "help hlp"
  }
];
