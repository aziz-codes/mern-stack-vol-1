import User from "../model/User.js";
export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    const otherData = users.map(({ password, ...users }) => users);
    res.send(otherData);
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};
export const saveUser = async (req, res) => {
  const { name, email, username, pass } = req.body;
  try {
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.status(400).json({
        message: "username is already registered. Please use a different one.",
      });
    }
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        message:
          "Email is already registered. Please use a different email address.",
      });
    }

    const newUser = new User({ name, email, username, password: pass });

    await newUser.save();
    const { password, ...data } = newUser.toObject();
    res.status(201).json({ message: "User created ", user: data });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" + err.message });
  }
};
