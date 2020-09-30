/**
 * @Author: colinparsons
 * @Date:   2020-09-18T08:31:16-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-18T08:39:39-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { shallow } from "enzyme";

import RosterHeader from "./roster-header";

describe("roster header", () => {
  const wrapper = shallow(<RosterHeader />);

  it("reads `This is a roster page!`", () => {
    expect(wrapper.find("#roster-header").text()).toBe(
      "This is a roster page!"
    );
  });
});
