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
    int n;cin>>n;vector<ll>p(n+1);for(int i=1;i<=n;i++){ll x;cin>>x;p[i]=p[i-1]+x;}
    vector<vector<ll>>dp(n+1,vector<ll>(n+1));
    for(int len=2;len<=n;len++)for(int l=1;l+len-1<=n;l++){
        int r=l+len-1;dp[l][r]=(1LL<<62);
        for(int k=l;k<r;k++)dp[l][r]=min(dp[l][r],dp[l][k]+dp[k+1][r]+p[r]-p[l-1]);
    }
    cout<<dp[1][n]<<'\n';
}
