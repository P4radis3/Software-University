function monkeyPatcher(command) {
    
    let post = this;
    let commands = {
        upvote: () => post.upvotes++,
        downvote: () => post.downvotes++,
        score: () => {
            
            let { upvotes, downvotes } = post;
            let total = upvotes + downvotes;
            let balance = upvotes - downvotes;
            let obfuscationFactor = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
            let obfuscatedUpvotes = total > 50 ? upvotes + obfuscationFactor : upvotes;
            let obfuscatedDownvotes = total > 50 ? downvotes + obfuscationFactor : downvotes;
            let rating = getRating(upvotes, downvotes, total, balance);

            return [obfuscatedUpvotes, obfuscatedDownvotes, balance, rating];
        }
    };

    return commands[command]();

    function getRating(upvotes, downvotes, total, balance) {
        if (total < 10) {
        
            return 'new';
        
        }

        if (upvotes / total > 0.66) {
            
            return 'hot';
            
        }
        
        if (balance >= 0 && total > 100) {
            
            return 'controversial';
            
        }

        if (balance < 0) {
        
            return 'unpopular';
            
        }
        
        return 'new';

    }
}
