import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  BtnWrapper,
  SectionTitleWrapper,
  SectionWrapper,
} from "../../assets/styles/CommonStyles";
import emailjs from "@emailjs/browser";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactWrapper } from "../../assets/styles/home/ContactWrapper";
import { useRef } from "react";

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required"),
    companyName: yup.string(),
    email: yup.string().email().required("Email is required"),
    contactNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits")
      .required("Contact number is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    branding: yup.boolean(),
    marketing: yup.boolean(),
    website: yup.boolean(),
    strategy: yup.boolean(),
    content: yup.boolean(),
    design: yup.boolean(),
    logo: yup.boolean(),
    naming: yup.boolean(),
    other: yup.boolean(),
    budget: yup.string().required("Budget is required"),
  })
  .required();

export default function QuickContact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const form = useRef();

  function onSubmit(data) {
    console.log(data);
    console.log("form", form);
    emailjs
      .sendForm(
        "service_5g5sfca",
        "template_21zh9kp",
        form.current,
        "cLinWhNUqZbIpCAga"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <ContactWrapper id="contact-home">
          <SectionWrapper>
            <Container maxWidth="md">
              <SectionTitleWrapper sx={{ mb: 6 }}>
                <Typography
                  variant="h2"
                  className="title"
                  sx={{ color: "#f0f0f0 !important" }}
                >
                  Contact Us
                </Typography>
              </SectionTitleWrapper>
              <Box className="form-wrapper">
                <Box className="form-inner-wrapper">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        variant="filled"
                        {...register("fullName")}
                        error={Boolean(errors.fullName)}
                        helperText={errors.fullName?.message}
                        InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                        inputProps={{ sx: { color: "#f0f0f0" } }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        variant="filled"
                        InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                        inputProps={{ sx: { color: "#f0f0f0" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="filled"
                        {...register("email")}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                        inputProps={{ sx: { color: "#f0f0f0" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Number"
                        variant="filled"
                        {...register("contactNumber")}
                        error={Boolean(errors.contactNumber)}
                        helperText={errors.contactNumber?.message}
                        InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                        inputProps={{ sx: { color: "#f0f0f0" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        variant="filled"
                        {...register("country")}
                        error={Boolean(errors.country)}
                        helperText={errors.country?.message}
                        InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                        inputProps={{ sx: { color: "#f0f0f0" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="filled"
                        {...register("city")}
                        error={Boolean(errors.city)}
                        helperText={errors.city?.message}
                        InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                        inputProps={{ sx: { color: "#f0f0f0" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked
                              {...register("branding")}
                            />
                          }
                          label="Branding"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("marketing")} />}
                          label="Marketing"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("website")} />}
                          label="Website"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("strategy")} />}
                          label="Strategy"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("content")} />}
                          label="Content"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("design")} />}
                          label="Design"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("logo")} />}
                          label="Logo"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("naming")} />}
                          label="Naming"
                          sx={{ color: "#f0f0f0" }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...register("other")} />}
                          label="Other"
                          sx={{ color: "#f0f0f0" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        control={control}
                        name="budget"
                        render={({
                          field: { onChange, onBlur, value, name, ref },
                          fieldState: { invalid, isTouched, isDirty, error },
                          formState,
                        }) => (
                          <FormControl fullWidth>
                            <InputLabel
                              id="budget-select"
                              sx={{ color: "#bdbdbd" }}
                            >
                              Budget
                            </InputLabel>
                            <Select
                              labelId="budget-select"
                              label="Budget"
                              value={value}
                              onChange={onChange}
                              name={name}
                              inputProps={{ sx: { color: "#f0f0f0" } }}
                            >
                              <MenuItem value={"Less than 10,000"}>
                                Less than 10,000
                              </MenuItem>
                              <MenuItem value={"10,000 - 25,000"}>
                                10,000 - 25,000
                              </MenuItem>
                              <MenuItem value={"25,000 - 50,000"}>
                                25,000 - 50,000
                              </MenuItem>
                              <MenuItem value={"50,000 - 100,000"}>
                                50,000 - 100,000
                              </MenuItem>
                              <MenuItem value={"More than 100,000"}>
                                More than 100,000
                              </MenuItem>
                            </Select>
                            {errors.budget && (
                              <FormHelperText error>
                                {errors.budget?.message}
                              </FormHelperText>
                            )}
                          </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <BtnWrapper>
                        <Button variant="contained" size="large" type="submit">
                          Submit
                        </Button>
                      </BtnWrapper>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </SectionWrapper>
        </ContactWrapper>
      </form>
    </div>
  );
}
