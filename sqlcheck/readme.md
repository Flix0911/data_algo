# SQL checklist of practice

- Reference the below links ~ `'X':O` will indicate a completed practice

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
