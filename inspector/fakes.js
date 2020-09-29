module.exports = {
  // https://api.slack.com/types/user
  user: () => {
    return {
      id: "W012A3CDE",
      team_id: "T012AB3C4",
      name: "spengler",
      deleted: false,
      color: "9f69e7",
      real_name: "Egon Spengler",
      tz: "America/New_York",
      tz_label: "Eastern Daylight Time",
      tz_offset: -14400,
      profile: {
        title: "",
        phone: "",
        skype: "",
        real_name: "Egon Spengler",
        real_name_normalized: "Egon Spengler",
        display_name: "spengler",
        display_name_normalized: "spengler",
        status_text: "Print is dead",
        status_emoji: ":books:",
        status_expiration: 1502138999,
        avatar_hash: "ge3b51ca72de",
        first_name: "Matthew",
        last_name: "Johnston",
        email: "spengler@ghostbusters.example.com",
        image_original:
          "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        image_24: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        image_32: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        image_48: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        image_72: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        image_192: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        image_512: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        team: "T012AB3C4",
      },
      is_admin: true,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_stranger: false,
      updated: 1502138686,
      is_app_user: false,
      is_invited_user: false,
      has_2fa: false,
      locale: "en-US",
    };
  },

  channel: () => {
    return {
      id: "C012AB3CD",
      name: "general",
      is_channel: true,
      is_group: false,
      is_im: false,
      created: 1449252889,
      creator: "U012A3CDE",
      is_archived: false,
      is_general: true,
      unlinked: 0,
      name_normalized: "general",
      is_shared: false,
      is_ext_shared: false,
      is_org_shared: false,
      pending_shared: [],
      is_pending_ext_shared: false,
      is_private: false,
      is_mpim: false,
      topic: {
        value: "Company-wide announcements and work-based matters",
        creator: "",
        last_set: 0,
      },
      purpose: {
        value:
          "This channel is for team-wide communication and announcements. All team members are in this channel.",
        creator: "",
        last_set: 0,
      },
      previous_names: [],
    };
  },

  repo: () => {
    return {
      nameWithOwner: "someorg/somerepo",
      isArchived: false,
      vulnerabilityAlerts: {
        nodes: [],
      },
      pullRequests: {
        totalCount: 0,
      },
    };
  },
};
