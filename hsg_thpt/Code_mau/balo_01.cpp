#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

int main(){
    int n,W;cin>>n>>W;vector<ll>dp(W+1,0);
    for(int i=0;i<n;i++){int w;ll v;cin>>w>>v;
        for(int c=W;c>=w;c--)dp[c]=max(dp[c],dp[c-w]+v);}
    cout<<dp[W]<<'\n';
}
