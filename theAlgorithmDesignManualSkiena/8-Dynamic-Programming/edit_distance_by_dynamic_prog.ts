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

  let i, j;
  for (i = 1; i < s.length; i++) {
    m[i] = [];
    for (j = 1; j < t.length; j++) {
      opt[MATCH] = m[i - 1][j - 1].cost + match(s[i], t[j]);
      opt[INSERT] = m[i][j - 1].cost + indel(t[j]);
      opt[DELETE] = m[i - 1][j].cost + indel(t[j]);

      m[i][j].cost = opt[MATCH];
      m[i][j].parent = MATCH;
      for (let k = INSERT; k <= DELETE; k++) {
        if (opt[k] < m[i][j].cost) {
          m[i][j].cost = opt[k];
          m[i][j].parent = k;
        }
      }
    }
    goal_cell(s, t, i, j);
    return m[i][j].cost;
  }
};

stringCompare("name", "email");

const row_init = (i: number) => {};
const column_init = (i: number) => {};

const goal_cell = (s: string, t: string, i: number, j: number) => {};

function indel(s: string): number {
  return 1;
}

function match(c: string, d: string) {
  if (c === d) return 0;
  else return 1;
}
