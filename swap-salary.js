// https://leetcode.com/problems/swap-salary/
# Write your MySQL query statement below
UPDATE salary
    SET sex =
    (
    CASE 
        WHEN sex = 'f' THEN 'm'
        WHEN sex = 'm' THEN 'f'
        ELSE sex
    END
    )
