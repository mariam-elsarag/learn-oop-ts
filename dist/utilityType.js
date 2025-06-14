"use strict";
// omit type
// example only want title and description from pst
const post1 = {
    title: "new post",
    description: "new des",
};
// Pick type
// select which item you want insdie this object
const post2 = {
    category: "Music",
    likes: 10,
};
// Partial
// change key to be optional
const post3 = {
    title: "test",
};
// behind the seen it use type mapping to meke it like this
/**
 * type Optional<T> = {
  [key in keyof T]?: T[key];
};
 */
