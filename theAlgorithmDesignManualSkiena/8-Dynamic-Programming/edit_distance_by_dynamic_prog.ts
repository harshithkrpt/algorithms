interface Cell {
  cost: number; // Cost of reaching this call
  parent: number; // Parent Call
}

const MATCH = 0;
const INSERT = 1;
const DELETE = 2;
const MAXLEN = 10;
const m: Cell[][] = []; // Dynamic Programming Table

const stringCompare = (s: string, t: string) => {
  const opt: [number, number, number] = [0, 0, 0];

  for (let i = 0; i < MAXLEN; i++) {
    row_init(i);
    column_init(i);
  }

  for (let i = 1; i < s.length; i++) {
    m[i] = [];
    for (let j = 1; j < t.length; j++) {
      opt[MATCH] = m[i - 1][j - 1].cost + match(s[i], t[j]);
      opt[INSERT] = m[i][j - 1].cost + indel(t[j]);
      opt[DELETE] = m[i - 1][j].cost + indel(s[i]);

      m[i][j].cost = opt[MATCH];
      m[i][j].parent = MATCH;
      for (let k = INSERT; k <= DELETE; k++) {
        if (opt[k] < m[i][j].cost) {
          m[i][j].cost = opt[k];
          m[i][j].parent = k;
        }
      }
    }
  }
  const [i, j] = goal_cell(s, t);
  return m[i][j].cost;
};

stringCompare("name", "email");

const row_init = (i: number) => {
  m[0][i].cost = i;
  if (i > 0) {
    m[0][i].parent = INSERT;
  } else m[0][i].parent = -1;
};

const column_init = (i: number) => {
  m[i][0].cost = i;
  if (i > 0) m[i][0].parent = DELETE;
  else m[i][0].parent = -1;
};

const goal_cell = (s: string, t: string): [number, number] => {
  return [s.length - 1, t.length - 1];
};

function indel(s: string): number {
  return 1;
}

function match(c: string, d: string) {
  if (c === d) return 0;
  else return 1;
}

const reconstruct_path = (s: string, t: string, i: number, j: number) => {
  if (m[i][j].parent === -1) return;
  if (m[i][j].parent === MATCH) {
    reconstruct_path(s, t, i - 1, j - 1);
    matchOut(s, t, i, j);
    return;
  }
  if (m[i][j].parent === INSERT) {
    reconstruct_path(s, t, i, j - 1);
    insertOut(t, j);
    return;
  }
  if (m[i][j].parent === DELETE) {
    reconstruct_path(s, t, i - 1, j);
    deleteOut(s, i);
    return;
  }
};

const insertOut = (s: string, j: number) => {
  console.log("I");
};

const matchOut = (s: string, t: string, i: number, j: number) => {
  if (s[i] == t[j]) console.log("M");
  else console.log("S");
};

const deleteOut = (s: string, i: number) => {
  console.log("D");
};
