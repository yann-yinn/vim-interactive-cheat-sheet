export default [
  {
    label: "Quit the current window. Quit vim if this is the last window.",
    command: ":q",
    keywords: "quit window close exit"
  },
  {
    label: "Write the current file and quit",
    command: ":wq",
    keywords: "quit write close exit"
  },
  {
    label: 'Like ":wq", but write only when changes have been made',
    command: ":x",
    keywords: "quit write close exit"
  },
  {
    label: "Exit vim, closing all windows.",
    command: ":qa",
    keywords: "quit close exit"
  },
  {
    label: "Exit vim. Any changes are lost.",
    command: ":qall!",
    keywords: "quit close exit"
  },
  {
    label: "Quit without saving changes",
    command: ":q!",
    keywords: "quit close exit"
  },
  {
    label: "Write the current file",
    command: ":w",
    keywords: "write save"
  },
  {
    label: "Insert text before the cursor",
    command: "i",
    keywords: "insert edit"
  },
  {
    label:
      "Save the current buffer under the name {file} and the filename of the current buffer to {file}",
    command: ":saveas {file}",
    keywords: "save as write file buffer filename"
  },
  {
    label: "⬅️ Move the cursor to the left",
    command: "h",
    keywords: "move go to left "
  },
  {
    label: "➡️ Move the cursor to the right",
    command: "l",
    keywords: "move go to right"
  },
  {
    label: "⬆️ Move the cursor up",
    command: "k",
    keywords: "move go to up"
  },
  {
    label: "⬇️ Move the cursor down",
    command: "j",
    keywords: "move go to down"
  },
  {
    label: "Move the cursor to the end of the word (inclusive)",
    command: "e",
    keywords: "move go to"
  },
  {
    label: "Move the cursor to the begining of the word",
    command: "b",
    keywords: "move go to word begining"
  },
  {
    label: "Move cursor to the beginning of the next word",
    command: "w",
    keywords: "move go to word beginning"
  },
  {
    label: "Go to first line of the file",
    command: "gg",
    keywords: "move go to first line beginning"
  },
  {
    label: "Go to the last line and last character of the file",
    command: "G",
    keywords: "move got to last line end"
  },
  {
    label: "Move to the top of window",
    command: "H",
    keywords: "move to top window"
  },
  {
    label: "Move to Middle line of window on the first non-blank character",
    command: "M",
    keywords: "move to middle line window beggining first"
  },
  {
    label: "Move cursor to line 59.",
    command: ":59",
    keywords: "move go to line number"
  },
  {
    label: "Move cursor to the end of line",
    command: "$",
    keywords: "move to end line"
  },
  {
    label: "Move cursor to first non-blank character of the line.",
    command: "^",
    keywords: "move first line beginning"
  },
  {
    label: "Move to the matching parenthesis, curly / square bracket",
    command: "%",
    keywords: "move got to match curly square bracket parenthesis"
  },
  {
    label: "Scroll by half a page up",
    command: "CTRL-u",
    keywords: "scroll up"
  },
  {
    label: "Scroll by half a page down",
    command: "CTRL-d",
    keywords: "scroll down"
  },
  {
    label: "Delete the chararacters under the cursor until the end of the line",
    command: "D",
    keywords: "delete character end line"
  },
  {
    label:
      "Delete from the position cursor is on till the end of the current word",
    command: "dw",
    keywords: "delete word cut end"
  },
  {
    label: "Delete current line",
    command: "dd",
    keywords: "delete cut line current"
  },
  {
    label: "Delete inside {",
    command: "di{",
    keywords: "delete inside"
  },
  {
    label: "change inside {",
    command: "ci{",
    keywords: "delete insert change inside"
  },
  {
    label: "Yank the current line",
    command: "yy",
    keywords: "yank copy current line"
  },
  {
    label: "Yank the selected text to clipboard",
    command: "y",
    keywords: "yank copy"
  },
  {
    label: "Put the text after the cursor",
    command: "p",
    keywords: "Put paste"
  },
  {
    label: "Append text after the cursor",
    command: "a",
    keywords: "insert append"
  },
  {
    label: "Append text at the end of the line",
    command: "A",
    keywords: "append insert end line"
  },
  {
    label: "Go to next occurence of {char} to the right",
    command: "f{char}",
    keywords: "move go to character right"
  },
  {
    label: "Go to next occurence of {char} to the left",
    command: "F{char}",
    keywords: "move go to character left"
  },
  {
    label: "Turn on syntax highlighting",
    command: ":syntax on",
    keywords: "syntax on color highlighting"
  },
  {
    label: "Turn off syntax highlighting",
    command: ":syntax off",
    keywords: "syntax off color highlighting"
  },
  {
    label: "Set syntax highlighting language",
    command: ":set syntax=javascript",
    keywords: "syntax color language highlighting"
  },
  {
    label: "Begin a new line below the cursor and insert text.",
    command: "o",
    keywords: "Insert begin new line"
  },
  {
    label: "Begin a new line above the cursor and insert text",
    command: "O",
    keywords: "Insert begin new line"
  },
  {
    label: "Undo changes",
    command: "u",
    keywords: "undo un do un-do"
  },
  {
    label:
      "Undo all latest changes on one line, the line were the latest changes where made",
    command: "U",
    keywords: "undo"
  },
  {
    label: "Redo changes which were undone",
    command: "CTRL-r",
    keywords: "redo undo"
  },
  {
    label: "Delete characters under and after the cursor",
    command: "x",
    keywords: "delete character cut"
  },
  {
    label: "Start visual mode per character",
    command: "v",
    keywords: "visual selection character"
  },
  {
    label: "Start visual mode linewise",
    command: "V",
    keywords: "visual selection linewise"
  },
  {
    label: "Start visual mode blockwise",
    command: "CTRL-v",
    keywords: "visual selection blockwise"
  },
  {
    label:
      "Delete from the cursor position to the end of the line and start insert.",
    command: "C",
    keywords: "delete insert and line"
  },
  {
    label: "Delete characters and start insert ( s stands for substitute)",
    command: "s",
    keywords: "substitute delete insert"
  },
  {
    label: "Delete lines and start insert (s stands for substitute)",
    command: "S",
    keywords: "substitute delete insert"
  },
  {
    label:
      "Enter replace mode : Each character you type replaces an existing character under the cursor",
    command: "R",
    keywords: "replace insert character"
  },
  {
    label: "Replace the character under the cursor with {char}",
    command: "r{char}",
    keywords: "replace insert character"
  },
  {
    label: "Search and replace in the whole file",
    command: ":%s/old/new/g",
    keywords: "search find replace"
  },
  {
    label: "search and replace in the current line",
    command: ":s/old/new/g",
    keywords: "search find replace"
  },
  {
    label: "Replace all occurences with confirmation",
    command: ":%s/old/new/gc",
    keywords: "search find replace"
  },
  {
    label: "Search and replace (case insensitive)",
    command: ":%s/old/new/gi",
    keywords: "search find replace"
  },
  {
    label:
      "Search forward for the next occurence of the word nearest to the cursor.",
    command: "*",
    keywords: "search find next occurence forward"
  },
  {
    label: 'Same as "*", but search backwards. ',
    command: "#",
    keywords: "search find next previous occurence backward"
  },
  {
    label:
      "Switch case of the character under the cursor and move the cursor to the right",
    command: "~",
    keywords: "case lowercase uppercase"
  },
  {
    label: "Reindent current line",
    command: "==",
    keywords: "indent"
  },
  {
    label: "Display line numbers",
    command: ":set number",
    keywords: "line numbers"
  },
  {
    label: "Search forward for the occurences of {pattern}",
    command: "/{pattern}",
    keywords: "/ ? search find"
  },
  {
    label: "Search backward for the occurences of {pattern}",
    command: "?{patten}",
    keywords: "/ ? search find"
  },
  {
    label: "Search result : next occurence in same direction",
    command: "n",
    keywords: "/ search find occurence"
  },
  {
    label: "Search result : next occurence in opposite direction",
    command: "N",
    keywords: "/ search find occurence"
  },
  {
    label: "Open vim with directory listing",
    command: "vim .",
    keywords: "open file explorer directory listing"
  },
  {
    label: "Open file index.js with Vim, jumping directly at line 86",
    command: "vim index.js +86",
    keywords: "open file line number"
  },
  {
    label: "Open file explorer (split window horizontally)",
    command: ":Sex",
    keywords: "open file explorer browser directory listing"
  },
  {
    label: "Open file explorer (split window vertically)",
    command: ":Vex",
    keywords: "open file explorer browser directory listing"
  },
  {
    label:
      "Open a new tab page with an empty window, after the current tab page",
    command: ":tabnew",
    keywords: "new tab"
  },
  {
    label: "Go to the next tab page",
    command: ":gt",
    keywords: "Go to next tab"
  },
  {
    label: "Turn on auto-indent",
    command: ":set autoindent",
    keywords: "indent"
  },
  {
    label: "Indent",
    command: ">>",
    keywords: "indent"
  },
  {
    label: "Un-indent",
    command: "<<",
    keywords: "indent"
  },
  {
    label: "Execute {cmd} with the shell",
    command: ":!{cmd}",
    keywords: "execute command shell"
  },
  {
    label: "Load color sheme {name}",
    command: ":colo {name}",
    keywords: "colorscheme"
  },
  {
    label: "Split current window horizontally",
    command: ":split",
    keywords: "split window horizontally"
  },
  {
    label: "Split current window vertically",
    command: ":vsplit",
    keywords: "split window horizontally"
  },
  {
    label: "Go to N next window",
    command: "CTRL-w w",
    keywords: "window switch next"
  },
  {
    label: "Reload .vimrc without restarting vim",
    command: ":so $MYVIMRC",
    keywords: "reload .vimrc"
  },
  {
    label: "Enable mouse support",
    command: ":set mouse=a",
    keywords: "mouse"
  },
  {
    label: 'Set a mark at cursor position: type "m" followed by a letter',
    command: "m{a-zA-Z}",
    keywords: "bookmarks marks"
  },
  {
    label: "Jump to the mark {a-z} in the current buffer",
    command: "'{a-zA-Z}",
    keywords: "bookmarks marks"
  },
  {
    label: "List all the current marks",
    command: ":marks",
    keywords: "bookmarks marks"
  },
  {
    label: "delete all marks",
    command: ":delmarks!",
    keywords: "bookmarks marks"
  },
  {
    label: "Delete the specified marks",
    command: ":delmarks {marks}",
    keywords: "delete marks bookmark"
  },
  {
    label: "Repeat last change.",
    command: ".",
    keywords: "repeat last change"
  },
  {
    label:
      'Display help about {subject}. {subject} can include wildcards like "*", "?" and "[a-z]"',
    command: ":help {subject}",
    keywords: "help"
  }
];
