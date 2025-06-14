// Learn Utility tpe
type Post = {
  title: string;
  category: string;
  description: string;
  likes: number;
};

// omit type
// example only want title and description from pst
const post1: Omit<Post, "category" | "likes"> = {
  title: "new post",
  description: "new des",
};
// Pick type
// select which item you want insdie this object
const post2: Pick<Post, "category" | "likes"> = {
  category: "Music",
  likes: 10,
};

// Partial
// change key to be optional
const post3: Partial<Post> = {
  title: "test",
};
// behind the seen it use type mapping to meke it like this
/**
 * type Optional<T> = {
  [key in keyof T]?: T[key];
};
 */
