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

struct DSU{
    vector<int>p,s;
    DSU(int n):p(n+1),s(n+1,1){iota(p.begin(),p.end(),0);}
    int find(int x){while(x!=p[x]){p[x]=p[p[x]];x=p[x];}return x;}
    bool join(int a,int b){a=find(a);b=find(b);if(a==b)return false;
        if(s[a]<s[b])swap(a,b);p[b]=a;s[a]+=s[b];return true;}
};
int main(){
    int n,m;cin>>n>>m;vector<tuple<ll,int,int>>e;
    for(int i=0;i<m;i++){int u,v;ll w;cin>>u>>v>>w;e.push_back({w,u,v});}
    sort(e.begin(),e.end());DSU d(n);ll ans=0;int cnt=0;
    for(auto [w,u,v]:e)if(d.join(u,v)){ans+=w;cnt++;}
    cout<<(cnt==n-1?ans:-1)<<'\n';
}
