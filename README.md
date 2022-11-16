# MANAGEMENT PLATFORM AND INTEROPERABILITY FOR BLOCKCHAIN BASED ON INTELLIGENT TOKENIZATION

For my final thesis in Computer Science I wanted to mix the full-stack capabilities that I have acquired during my bachelor program with my passion for Blockchain-related technologies.

To achieve this, I created a Decentralized Autonomous Organization (locally using Moralis) and a Governance Token [code not included] using ERC-20 Open Zeppelin library and the Brownie Framework.
This is pretty standard, there are thousands of different DAOs that implement these concepts. Next, I wanted to apply these new ideas and see how they could impact local real life communities. 
In order to do this, the purpose of the DAO was for neighbors from the same ZIP code area to be able to vote and debate about future legislations that affect their community.
The purpose of the token was for governance, each member would be allocated the same number of tokens, thus resulting in 1 token = 1 vote. 

The whole purpose of using a DAOs is to ensure that once a rule/legislation is voted upon, the technology will guarantee that this happens. Since the "idea" of this product
was aimed towards people of all ages, user interface and design was also a crutial part of this thesis. Web3 can be complicated even for tech people to navigate (I myself know), so
the focus was to create a mobile app easy to use, with only the essential features.

To achieve this, I used React Native to create a simple mobile app with less than 10 screens. Here are some screenshots of the screens that I designed: 

![iniciales](https://user-images.githubusercontent.com/42673884/202236743-04533345-dd8b-46cd-b398-4542ac677be3.png)

![finales](https://user-images.githubusercontent.com/42673884/202236822-7c540b74-c42d-429e-8fe0-b9efefb849ee.png)

The Registration process was simplified for only people leaving in Leganes, the neighborhood of my University. So I created a verification function that would only allow
users to register if their Legal Name was the same than in the National Identity Number that thay introduced, and this former Number stated as a living in the address also given.
To verify this legitimally was impossible because I would have needed access to government information, so I just created a simple dataset with fake information.

To conclude, the thesis came to be more of a technilogical hipotesis/aproximation to the initial idea. In order to fully implement this would mean access to state-of-the-art blokckchain oracles,
since most of the rules would apply in the physical realm, not the usual digital one in which DAOs currently can opperate, and many more things. However, this was a great
opportunity to learn on my own a lot more about javascript, blockchain tools (hardhat, brownie, moralis) and React Native, apart from experiencing the whole 6-7 month process
of coming up with an idea, making product decisions and failing a lot!

Thanks for reading :)
