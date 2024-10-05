export type Position = {
  id: number;
  name: string;
  short_name: string;
};

export const element_type: Record<number, string> = {
  1: "Goalkeeper",
  2: "Defence",
  3: "Midfield",
  4: "Forward",
};
