function foo(i) {
  if (i < 0) return; // qnd a função é satisfeita o retorno é feito
  console.log("begin:" + i);
  foo(i - 1);
  console.log("end:" + i);
}
foo(3);