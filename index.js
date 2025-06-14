function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  const handleLoginAttempt = (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts"
    }
    
    if (passwordAttempt === userInfo.password) {
      return "Login successful"
    }
    else {
      attemptCount++;
      return `Attempt ${attemptCount}: Login failed`
    }
  }

  return handleLoginAttempt
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
}