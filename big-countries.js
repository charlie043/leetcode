// https://leetcode.com/problems/big-countries/
# Write your MySQL query statement below
select t1.name , t1.population , t1.area
from World t1 
where t1.population>25000000 or t1.area >3000000
