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

struct BITMin{
    int n;vector<pair<int,int>>b;
    BITMin(int n):n(n),b(n+1,{1000000000,-1}){}
    void add(int i,pair<int,int>x){for(;i<=n;i+=i&-i)b[i]=min(b[i],x);}
    pair<int,int>get(int i){pair<int,int>x={1000000000,-1};for(;i>0;i-=i&-i)x=min(x,b[i]);return x;}
};
int main(){
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int n;ll m;cin>>n>>m;vector<ll>p(n+1);
    for(int i=1;i<=n;i++){ll x;cin>>x;p[i]=p[i-1]+x;}
    vector<ll>v=p;sort(v.begin(),v.end());v.erase(unique(v.begin(),v.end()),v.end());
    int z=v.size();BITMin ft(z);vector<int>dp(n+1,1000000000),pre(n+1,-1);dp[0]=0;
    auto rankrev=[&](ll x){return z-int(lower_bound(v.begin(),v.end(),x)-v.begin());};
    ft.add(rankrev(p[0]),{0,0});
    for(int i=1;i<=n;i++){
        auto [best,j]=ft.get(rankrev(p[i]-m));
        if(j!=-1){dp[i]=best+1;pre[i]=j;ft.add(rankrev(p[i]),{dp[i],i});}
    }
    if(pre[n]==-1){cout<<-1<<'\n';return 0;}
    vector<int>cuts;for(int i=n;pre[i]>0;i=pre[i])cuts.push_back(pre[i]);
    reverse(cuts.begin(),cuts.end());cout<<dp[n]<<'\n';
    for(size_t i=0;i<cuts.size();i++){if(i)cout<<' ';cout<<cuts[i];}cout<<'\n';
}
