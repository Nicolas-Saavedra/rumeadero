WITH weekly_likes AS (
    SELECT 
        user AS user_id,
        COUNT(*) AS likes_this_week
    FROM forum_posts_likes
    WHERE strftime('%Y-%W', created) = strftime('%Y-%W', 'now', 'localtime')
    GROUP BY user_id
), weekly_comments AS (
    SELECT 
        author AS user_id,
        COUNT(*) AS comments_this_week
    FROM forum_posts_comments
    WHERE strftime('%Y-%W', created) = strftime('%Y-%W', 'now', 'localtime')
    GROUP BY user_id
), groups AS (
    SELECT 
        user AS user_id,
        COUNT(*) AS groups_count
    FROM groups_members
    GROUP BY user_id
), past_week_likes AS (
    SELECT 
        user AS user_id,
        COUNT(*) AS likes_past_week
    FROM forum_posts_likes
    WHERE strftime('%Y-%W', created, '-7 days') = strftime('%Y-%W', 'now', 'localtime')
    GROUP BY user_id
), past_week_comments AS (
    SELECT 
        author AS user_id,
        COUNT(*) AS comments_past_week
    FROM forum_posts_comments
    WHERE strftime('%Y-%W', created, '-7 days') = strftime('%Y-%W', 'now', 'localtime')
    GROUP BY user_id
), likes_comparison AS (
    SELECT 
        id as user_id,
        likes_this_week,
        likes_past_week,
        IIF(COALESCE(likes_this_week, 0) > COALESCE(likes_past_week, 0), 1, 
            IIF(COALESCE(likes_this_week, 0) = COALESCE(likes_past_week, 0), 0, -1)
        ) AS likes_comparison_result
    FROM users
    LEFT JOIN weekly_likes ON users.id = weekly_likes.user_id
    LEFT JOIN past_week_likes ON weekly_likes.user_id = past_week_likes.user_id
), comments_comparison AS (
    SELECT 
        id as user_id,
        comments_this_week,
        comments_past_week,
        IIF(COALESCE(comments_this_week, 0) > COALESCE(comments_past_week, 0), 1, 
            IIF(COALESCE(comments_this_week, 0) = COALESCE(comments_past_week, 0), 0, -1)
        ) AS comments_comparison_result
    FROM users
    LEFT JOIN weekly_comments on users.id = weekly_comments.user_id
    LEFT JOIN past_week_comments ON weekly_comments.user_id = past_week_comments.user_id
)
SELECT 
    id,
    username,
    groups,
    likes_this_week,
    comments_this_week,
    likes_comparison_result,
    comments_comparison_result
FROM
(
    SELECT 
    u.id,
    u.username,
    COALESCE(g.groups_count, 0) AS groups,
    COALESCE(wl.likes_this_week, 0) AS likes_this_week,
    COALESCE(wc.comments_this_week, 0) AS comments_this_week,
    COALESCE(pwl.likes_past_week, 0) AS likes_past_week,
    COALESCE(pwc.comments_past_week, 0) AS comments_past_week,
    lc.likes_comparison_result AS likes_comparison_result,
    cc.comments_comparison_result AS comments_comparison_result
FROM users u
LEFT JOIN weekly_likes wl ON u.id = wl.user_id
LEFT JOIN weekly_comments wc ON u.id = wc.user_id
LEFT JOIN groups g ON u.id = g.user_id
LEFT JOIN past_week_likes pwl ON u.id = pwl.user_id
LEFT JOIN past_week_comments pwc ON u.id = pwc.user_id
LEFT JOIN likes_comparison lc ON u.id = lc.user_id
LEFT JOIN comments_comparison cc ON u.id = cc.user_id
);
