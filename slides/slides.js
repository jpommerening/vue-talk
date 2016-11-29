const context = require.context('./de', false, /\.md/);
const modules = {};

context.keys().forEach(key => {
  const module = context(key);
  modules[key] = module;
  customReloadLogic(key, module, false);
})

if (module.hot) {
  module.hot.accept(context.id, () => {
    //You can't use context here. You _need_ to call require.context again to
    //get the new version. Otherwise you might get errors about using disposed
    //modules
    const reloadedContext = require.context('./de', false, /\.md$/);
    //To find out what module was changed you just compare the result of the
    //require call with the version stored in the modules hash using strict
    //equality. Equal means it is unchanged.
    const changedModules = reloadedContext.keys()
      .map(key => ([key, reloadedContext(key)]))
      .filter(([k, m]) => (modules[k] === m));
    changedModules.forEach(([k, m]) => {
      modules[k] = m;
      customReloadLogic(k, m, true);
    });
  });
}

function customReloadLogic(name, module, isReload) {
  console.log("module " + name + (isReload ? " re" : " ") + "loaded");
}
