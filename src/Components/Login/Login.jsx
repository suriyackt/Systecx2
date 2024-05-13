import React, { useState, useEffect } from "react";
import css from "./Login.module.scss";
import { Row, Col } from "antd";
import { Button } from "@mui/material";
import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
// import Button from '@mui/material/Button';
import CloseIcon from "@mui/icons-material/Close";

const StyledInput = styled("input")({
  border: "none",
  minWidth: 0,
  outline: 0,
  padding: 0,
  paddingTop: "1em",
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&::placeholder": {
    opacity: 0,
    transition: "0.1s ease-out",
  },
  "&:focus::placeholder": {
    opacity: 1,
  },
  "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
    {
      top: "0.5rem",
      fontSize: "0.75rem",
    },
  "&:focus ~ label": {
    color: "var(--Input-focusedHighlight)",
  },
  "&:-webkit-autofill": {
    alignSelf: "stretch",
  },
  "&:-webkit-autofill:not(* + &)": {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
  },
});

const StyledLabel = styled("label")(({ theme }) => ({
  position: "absolute",
  lineHeight: 1,
  top: "calc((var(--Input-minHeight) - 1em) / 2)",
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
}));

const InnerInput = React.forwardRef(function InnerInput(props, ref) {
  const { onChange, value, label } = props;
  const id = React.useId();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <React.Fragment>
      <StyledInput
        {...props}
        ref={ref}
        id={id}
        onChange={handleChange}
        value={value}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </React.Fragment>
  );
});

const FloatingLabelInput = ({ value, onChange, type, label }) => {
  return (
    <Input
      // endDecorator={<CheckCircleOutlined />}
      slots={{ input: InnerInput }}
      slotProps={{
        input: { placeholder: "", type: type, value, onChange, label },
      }}
      sx={{
        "--Input-minHeight": "56px",
        "--Input-radius": "6px",
      }}
    />
  );
};

const Login = ({setLoginUser}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [forgotUser, setForgotUser] = useState({
    username: "",
  });

  const [forgot, setForgot] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  console.log(errors,"errors")

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const forgotPassChange = () => {
    // console.log("formdatatat",formData)
    setForgotUser({
      username: formData.username,
    });
    setOpen(true);
  };
  // console.log("forgotUser",forgotUser)
  // console.log(updatedData,"UpdatedData",retrievedData)

  const validateForm = () => {
    // Keep the existing errors if they are already set
    const newErrors = { ...errors };
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else {
      delete newErrors.username; // Clear the error if the field is valid
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else {
      delete newErrors.password; // Clear the error if the field is valid
    }
    setErrors(newErrors);
    // Return true only if there are no errors in both fields
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // setUserData([formData]);
      // setTimeout(() => {
  
      let oldData = JSON.parse(localStorage.getItem("userData"));
      // const validUser = oldData.filter((user)=>{
      //     return user.username === formData.username && user.password === formData.password
      // })
      // console.log(validUser,"ValidUservaliduser")

      const updatedData = oldData ? [...oldData, formData] : [formData];
  
      localStorage.setItem("userData", JSON.stringify(updatedData));
      setLoginUser(true)
      console.log(updatedData, "userDatauserDatauserData");
      // }, 6000);
      setFormData({
        username: "",
        password: "",
        remember: false,
      });

      // if(validUser){
       
      // }
      // else{
      //   console.log("Credentials are not matching")
      // }
    
    }
  
  };
  // console.log(updatedData,"UpdatedData",retrievedData)

  // console.log(userData)
  return (
    <section className={css.background}>
      <div>
        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                }}
              >
                <img src="bubblechat.png" />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "rgba(108, 108, 108, 1)",
                  }}
                >
                  A link to reset your password has been sent to{" "}
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {forgotUser.username}
                  </span>
                </p>
              </div>
            </Alert>
          </Collapse>
          {/* <Button
        // disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
        </Box>
      </div>
      <div className={css.wrapper}>
        <div
          className={` ${css.container}`}
        >
          <Row className={css.Topfoot}>
            <Col span={12}>
              <div className={css.tmsLogo}>
                <img src="tmslogo.png" alt="TMS LOGO" />
              </div>
            </Col>
          </Row>

          <Row className={css.wholeContent}>
            <Col span={12} className={css.LeftCol}>
              <div className={css.LeftSide}>
                <div className={css.round} />
                <div className={css.upperImage}>
                  <div>
                    <img className={css.ImageOdd} src="loginimage.png" />
                  </div>
                  <div>
                    <img className={css.ImageEven} src="loginimage2.png" />
                  </div>
                  <div>
                    <img className={css.ImageOdd} src="loginimage3.png" />
                  </div>
                  <div>
                    <img className={css.ImageEven} src="loginimage4.png" />
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12} className={css.TopRightSide}>
              {!forgot && (
                <div className={css.RightSide}>
                  <div style={{ width: "100%" }}>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <h4 className={css.Welcome}>Welcome to TMS</h4>
                      </div>
                      <div className={css.Trading}>
                        <h3>Trading & Analytics Platform</h3>
                      </div>
                      <div className={css.Inputs}>
                        <div className={css.UserInput}>
                          <FloatingLabelInput
                            value={formData.username}
                            label="User ID / Email"
                            type="text"
                            onChange={(e) =>
                              handleChange({
                                target: { name: "username", value: e },
                              })
                            }
                          />
                          <div style={{color:"red"}}>
                          {errors.username && <span>{errors.username}</span>}
                          </div>
                        </div>
                        <div className={css.PasswordInput}>
                          <FloatingLabelInput
                            value={formData.password}
                            label="Password"
                            type="password"
                            onChange={(e) =>
                              handleChange({
                                target: { name: "password", value: e },
                              })
                            }
                          />
                          <div style={{color:"red"}}>
                          {errors.password && <span>{errors.password}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="remember">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                            className={css.checkbox}
                            style={{ height: "18px", width: "18px" }}
                          />
                          &nbsp;
                          <label className={css.remember}>Remember me</label>
                        </div>
                        <a
                          onClick={() => {
                            setForgot(true);
                          }}
                        >
                          Forgot your password?
                        </a>
                      </div>

                      <div className={css.TradingButton}>
                        <Button type="submit" className={css.button}>
                          Login
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {forgot && (
                <div>
                  <div className={css.RightSide1}>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div>
                          <h3
                            className={css.Welcome}
                            style={{
                              fontSize: "22px",
                              color: "rgba(35, 35, 35, 1)",
                            }}
                          >
                            Forgot Password ?
                          </h3>
                        </div>
                        <div className={css.Trading}>
                          <p style={{ fontSize: "12px" }}>
                            Enter the email address associated with your
                            account,
                            <br />
                            and we'll email you a link to reset your password.
                          </p>
                        </div>

                        <div className={css.Inputs}>
                          <div className={css.UserInput}>
                            <FloatingLabelInput
                              value={formData.username}
                              label="User ID / Email"
                              type="text"
                              onChange={(e) =>
                                handleChange({
                                  target: { name: "username", value: e },
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className={css.TradingButton}>
                          <Button
                            type="submit"
                            className={css.button}
                            onClick={forgotPassChange}
                          >
                            Send reset link
                          </Button>
                        </div>
                        <div
                          style={{
                            padding: "1rem 0rem .3rem 0rem",
                            flexDirection: "row",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <p>I remembered my password. Let's go</p>
                        </div>
                        <div>
                          <a
                            className={css.backtologin}
                            onClick={() => {
                              setForgot(false);
                            }}
                          >
                            <img src="right-arrow.png" />
                            back to login
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>

          <Row className={css.Topfoot}>
            <Col span={12} >
              <div className={css.footer}>
                <p>
                  Powered by <span>STX Platform</span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Login;
