/**
 * @Author: colinparsons
 * @Date:   2020-09-10T18:25:27-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-16T14:58:23-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["jest-enzyme"],
  testEnvironment: "enzyme",
  moduleDirectories: ["node_modules", "."],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};
