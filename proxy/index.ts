const og = { name: "tom" };

const relative = new Proxy(og, {
  get(target, key) {
    console.log("tacking: ", key);
    return target[key];
  },
  set(target, key, value) {
    console.log("updating");
    return Reflect.set(target, key, value);
  },
});
relative.name; // logs tracking name
relative.name = "bob"; // logs updating
//proxies are usful for when you have a large object that would be expremcive to duplicate
