SELECT
post,
hotness_score,
top_score
FROM (
    SELECT fp.id AS post,
        (COALESCE(l.likes, 0) + COALESCE(c.comments, 0) * 2.5) * EXP(-0.5 * (strftime('%s', 'now') - strftime('%s', fp.created)) / (24 * 60 * 60))
            * (1 - 0.05 * MAX((strftime('%s', 'now') - strftime('%s', fp.created)) / (24 * 60 * 60) - 7, 0)) 
        AS hotness_score,
        (COALESCE(l.likes, 0) * 1.5 + COALESCE(c.comments, 0)) * (1 - 0.02 * (strftime('%s', 'now') - strftime('%s', fp.created)) / (24 * 60 * 60))
            * (1 - 0.05 * MAX((strftime('%s', 'now') - strftime('%s', fp.created)) / (24 * 60 * 60) - 30, 0)) 
        AS top_score
    FROM forum_posts fp
    LEFT JOIN (
        SELECT post, COUNT(*) AS likes
        FROM forum_posts_likes
        GROUP BY post
    ) l ON fp.id = l.post
    LEFT JOIN (
        SELECT post, COUNT(*) AS comments
        FROM forum_posts_comments
        GROUP BY post
    ) c ON fp.id = c.post
);
