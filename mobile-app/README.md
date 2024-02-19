# Vocably Pro Mobile App - Development Environment Setup

To set up a development environment for the Vocably Pro mobile app, follow these instructions.

## Prerequisites

Ensure that you have the necessary prerequisites for running React Native applications. If not, refer to the [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup?guide=native&package-manager=npm) for detailed instructions.

## Getting Started

1. Navigate to the root directory of the project and install the required npm packages or yarn dependencies:

  ```bash
  npm install
  ```

2. The Vocably Pro mobile app has dependencies located in the `packages` directory. Install these dependencies by running the build script specified in the `scripts/build-packages.mjs` file. Navigate to the `scripts` directory and execute the following command:

  ```bash
  cd scripts
  node build-packages.mjs
  ```

3. Move to the `mobile-app` directory and install the required npm packages or yarn dependencies:

  ```bash
  cd ../mobile-app
  npm install
  ```

4. In some cases, it may be necessary to reinstall the native projects. For iOS, run the following command:

  ```bash
  npm run reset-ios
  ```

5. Finally, start the application in the simulator using the following React Native scripts:

    - For iOS:

        ```bash
        npm run ios
        ```

    - For Android:

        ```bash
        npm run android
        ```

Now, you should have successfully set up and run the Vocably Pro mobile app on the simulator.
