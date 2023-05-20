module.exports =  (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.redirect('/user/login');
  }
  next();
};
