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

    - Test: https://sqlzoo.net/wiki/BBC_QUIZ :O

---
- 2 - `https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial`

    - 1 - Change the query shown so that it displays nobel prizes for 1950
        - SELECT yr, subject, winner FROM nobel WHERE yr = 1960
        - SELECT yr, subject, winner FROM nobel WHERE yr = 1950

    - 2 - Show who won the 1962 prize for literature
        - SELECT winner FROM nobel WHERE yr = 1960 AND subject = 'physics'
        - SELECT winner FROM nobel WHERE yr = '1962' AND subject = 'literature'
    
    - 3 - Show the year and subject that won 'Albert Einstein' his prize
        - SELECT yr, subject FROM nobel WHERE winner = 'Albert Einstein'

    - 4 - Give the name of the 'peace' winners since the year 2000, including 2000
        - SELECT winner FROM nobel WHERE subject = 'peace' AND yr >= 2000

    - 5 - Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive
        -  SELECT yr, subject, winner FROM nobel WHERE subject = 'literature' AND yr BETWEEN 1980 and 1989

    - 6 - Show all details of the presidential winners:
            - Theodore Roosevelt
            - Thomas Woodrow Wilson
            - Jimmy Carter
            - Barack Obama
        - SELECT * FROM nobel WHERE winner IN ('Theodore Roosevelt', 'Thomas Woodrow Wilson', 'Jimmy Carter', 'Barack Obama')
    
    - 7 - Show the winners with first name John
        - SELECT winner FROM nobel where winner LIKE 'John%'

    - 8 - Show the year, subject, and name of physics winners for 1980 together with the chemistry winnerfs for 1984
        - SELECT yr, subject, winner FROM nobel WHERE yr = '1980' AND subject = 'physics' OR yr = '1984' AND subject = 'chemistry'

    - 9 - Show the year, subject, and name of winners for 1980 exclusing chemistry and medicine
        - SELECT yr, subject, winner FROM nobel WHERE yr = '1980' AND subject NOT IN ('chemistry' 'medicine')

    - 10 - Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)
        - SELECT yr, subject, winner FROM nobel WHERE subject = 'medicine' AND yr < 1910 OR subject = 'literature' AND yr >= 2004

    - 11 - Find all details of the prize won by PETER GRÜNBERG
        - SELECT yr, subject, winner FROM nobel WHERE winner = 'Peter Grünberg'

    - 12 - Find all the details of the prize won be Eugene O'Neill
        - SELECT yr, subject, winner FROM nobel WHERE winner = 'Eugene O''neil'

    - 13 - Knights in order - List the winners, year and subject where the winner starts with Sir. Show the most recent first, then by name order
        - SELECT winner, yr, subject FROM nobel WHERE winner LIKE 'Sir %' ORDER by yr DESC, winner

    - 14 - The expression subject IN ('chemistry', 'physics') can be used as a value - it will be 0 or 1. Show the 1984 winners and subject ordered by subject and winner name; but list chesmitry and physics last