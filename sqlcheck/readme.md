# SQL checklist of practice

- Reference the below links ~ `'X':O` will indicate a completed practice

---

- Link - `https://datalemur.com/blog/games-to-learn-sql#sql-murder-mystery:O`

- Notes:
    - Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".	
        - Annabel miller ~ 16371 - 490173 ~ 103 ~ franklin avanue ~ 318771143
            - 16371 ~ I saw the murder happen, and I recognized  the killer from my gym w here I was working out last week on January the 9th
                - get_fit_now_member ~ id/90081 ~ person_id/16371 ~ name/annabel miller ~ member_status/gold
                    - get_fit_now_check_in ~ check_in_time/1600 / check_out_time/1700
                    - 3 potential at the same timeslot
                        - membership_id/48Z7A
                            - person_id/28819 ~ name/joe germuska
                        - membership_id/48Z55
                            - person_id/67318 ~ name/jeremy bowers
                                - I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017.
                                - 1 potential
                                    - id/202298
                                        - id/99716 ~ name/miranda priestly ~ address_number/1883 ~ address_street_name/golden ave ~ ssn/987756388
                                        - GUILTY
                                    - id/291182
                                        - id/90700 ~ name/regina george / address_number/332 ~ address_street_name/maple ave ~ ssn/337169072
                        - membership_id/90081
                            - person_id/16371 ~ name/annabel miller
        - Lasonya Wildey - 17729 ~ 439686 ~ 3824 ~ northwestern dr ~ 917817122


---

- Link - `https://sql-island.informatik.uni-kl.de/:O`

---

- SQLZoo

- Base link: https://sqlzoo.net/wiki/SQL_Tutorial

    - 0 - `https://sqlzoo.net/wiki/SELECT_basics:O`
        - The example uses a WHERE clause to show the population of 'France'. Note that strings should be in 'single quotes';
            - SELECT 
            - population (column)
            - FROM 
            - world (table)
            - WHERE 
            - name = 'Germany'

        - Checking a list the word **IN** allows us to check if an item is in a list. The example shows the name and population for the countries 'Brazil', 'Russia', 'India', and 'China
            - SELECT name, population FROM world
                WHERE name IN ('Sweden', 'Norway', 'Denmark');

        - Which countries are not too small and not too big? `BETWEEN` allows range checking (range specified is inclusive of boundary values). The example below shows countries with an area of 250,000-300,000 sq. km. Modify it to show the country and the area for countries with an area between 200,000 and 250,000.
            - SELECT name, area FROM world
    WHERE area BETWEEN 200000 AND 250000

    - 1 - `https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial`
        - Observe the result of running this SQL command to show the name, continent and population of all countries.
            - SELECT name, continent, population FROM world
        - Show the name for the countries that have a population of at least 200 million. 200 million is 200000000, there are eight zeros.
            - SELECT name FROM world WHERE population >= 200000000
        - Give the name and the per capita GDP for those countries with a population of at least 200 million.
            - SELECT name, gdp/population FROM world WHERE population>200000000
        - Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.
            - SELECT name, population/1000000 FROM world WHERE continent = 'South America'
        - Show the name and population for France, Germany, Italy
            - SELECT name, population FROM world WHERE name IN ('France', 'Germany', 'Italy')
        - Show the countries which have a name that includes the word 'United'
            - SELECT name FROM world WHERE name LIKE 'United%'
        - Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million. Show the countries that are big by area or big by population. Show name, population and area.
            - SELECT name, population, area FROM world WHERE population >= 250000000 OR area >= 3000000
        - Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area.
            - Australia has a big area but a small population, it should be included.
            - Indonesia has a big population but a small area, it should be included.
            - China has a big population and big area, it should be excluded.
            - United Kingdom has a small population and a small area, it should be excluded.
                - SELECT name, population, area FROM world WHERE area >= 3000000 XOR population >= 250000000
        - Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. Use the ROUND function to show the values to two decimal places.

            - For Americas show population in millions and GDP in billions both to 2 decimal places.
            - Millions and billions
            - Missing decimals
                - SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2) FROM world WHERE continent = 'South America'
        - Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000. Show per-capita GDP for the trillion dollar countries to the nearest $1000.
            - SELECT name, ROUND(gdp/population, -3) FROM world WHERE gdp >= 1000000000000
        - Greece has capital Athens. Each of the strings 'Greece', and 'Athens' has 6 characters. Show the name and capital where the name and the capital have the same number of characters.
            - SELECT name, capital FROM world WHERE LENGTH(name) = LENGTH(capital)
        - The capital of Sweden is Stockholm. Both words start with the letter 'S'. Show the name and the capital where the first letters of each match Don't include countries where the name and the capital are the same word. You can use the function LEFT to isolate the first character. You can use <> as the NOT EQUALS operator.
            - SELECT name, capital FROM worldWHERE LEFT(name, 1) = LEFT(capital, 1) AND NOT name = capital
        - Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name. Find the country that has all the vowels and no spaces in its name. You can use the phrase name NOT LIKE '%a%' to exclude characters from your results. The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'
            - SELECT name FROM world WHERE name LIKE '%a%' AND name LIKE '%e%' AND name LIKE '%i%' AND name LIKE'%o%' AND name LIKE '%u%' AND name NOT LIKE '% %'
